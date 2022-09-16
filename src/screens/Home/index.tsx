import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native'

import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';

import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png'

export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([])

  const navigation = useNavigation()

  function handleOpenGameAds({id, title, baseUrl}:GameCardProps) {
    navigation.navigate('game', {id, title, baseUrl})
  }

  useEffect(() => {
    async function getGames() {
      const response = await fetch('http://192.168.0.104:3333/games');
      const games = await response.json()
      console.log(games)
      setGames(games)
    }
    getGames()
  },[])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading 
          title='Encontre seu duo!'
          subtitle='Selecione o game que deseja jogar...'
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGameAds(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        >
        </FlatList>
        
      </SafeAreaView>
    </Background>
  );
}