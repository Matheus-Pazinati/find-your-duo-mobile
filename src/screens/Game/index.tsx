import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../components/Background';
import { View, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';

import logoImg from '../../assets/logo-nlw-esports.png'

import { useRoute, useNavigation } from '@react-navigation/native'

import { GameParams } from '../../@types/navigation';

import { styles } from './styles';



export function Game() {

  const route = useRoute()
  const game = route.params as GameParams
  const navigation = useNavigation()

  function handleBackHomeScreen() {
    navigation.goBack()
  }


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
      </SafeAreaView>
    </Background>
  );
}