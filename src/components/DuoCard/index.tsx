import { View } from 'react-native';
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
  data: DuoCardProps
}

export function DuoCard({ data }: Props) {

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
        value={playOneDayInAWeek ? `${data.weekDays.length} dia` : `${data.weekDays.length} dias`}
      />
      <DuoInfo
        label='Chamada de áudio?'
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={data.useVoiceChannel ? `${THEME.COLORS.SUCCESS}` : `${THEME.COLORS.ALERT}`}
      />


    </View>
  );
}