import { TouchableOpacity, View, Text } from 'react-native';
import { THEME } from '../../theme';

import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {
  id: string,
  hourEnd: string,
  hourStart: string,
  name: string,
  useVoiceChannel: boolean,
  weekDays: string[]
  yearsPlaying: number,
}

interface Props {
  data: DuoCardProps,
  onConnect: () => void
}

export function DuoCard({ data, onConnect }: Props) {

  const playtheGameMorenThanOneYear = data.yearsPlaying > 1;
  const playOneDayInAWeek = data.weekDays.length === 1

  return (
    <View style={styles.container}>
      <DuoInfo
        label='Nome'
        value={data.name}
      />
      <DuoInfo
        label='Tempo de jogo'
        value={playtheGameMorenThanOneYear ? `${data.yearsPlaying} anos` : `${data.yearsPlaying} ano`}
      />
      <DuoInfo
        label='Disponibilidade'
        value={playOneDayInAWeek ? `${data.weekDays.length} dia \u2022 ${data.hourStart.split(':')[0]}h - ${data.hourEnd.split(':')[0]}h` : `${data.weekDays.length} dias \u2022 ${data.hourStart.split(':')[0]}h - ${data.hourEnd.split(':')[0]}h`}
      />
      <DuoInfo
        label='Chamada de áudio?'
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={data.useVoiceChannel ? `${THEME.COLORS.SUCCESS}` : `${THEME.COLORS.ALERT}`}
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={onConnect}
      >
        <Text style={styles.buttonTitle}>
          Conectar DUO
        </Text>
      </TouchableOpacity>
    </View>
  );
}