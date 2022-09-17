import { useEffect, useState } from 'react';

import { useRoute, useNavigation } from '@react-navigation/native';
import { GameParams } from '../../@types/navigation';

import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native';

import { Background } from '../../components/Background';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { Heading } from '../../components/Heading';

import { Entypo } from '@expo/vector-icons';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';


export function Game() {

  const route = useRoute()
  const game = route.params as GameParams
  const navigation = useNavigation()

  function handleBackHomeScreen() {
    navigation.goBack()
  }

  const [duos, setDuos] = useState<DuoCardProps[]>([])

  useEffect(() => {
    async function getGameAds() {
      const response = await fetch(`http://192.168.0.104:3333/games/${game.id}/ads`);
      const ads = await response.json()
      setDuos(ads)
    }
    getGameAds()
  },[])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackHomeScreen}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.baseUrl }}
          style={styles.cover}
          resizeMode='cover'
        />

        <Heading
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard 
              data={item}
              onConnect={() => {}}
             />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>
              Não há anúncios publicados para este jogo.
            </Text>
          )}
        />
      </SafeAreaView>
    </Background>
  );
}