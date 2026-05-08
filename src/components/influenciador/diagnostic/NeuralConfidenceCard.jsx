import { useTranslation } from 'react-i18next'

import Card, { CardLabel, CardTitle } from '../../ui/Card.jsx'
import ProgressBar from '../../ui/ProgressBar.jsx'
import { NEURAL_CONFIDENCE } from '../../../mocks/analise.js'

export default function NeuralConfidenceCard() {
  const { t } = useTranslation()

  return (
    <Card glass className="flex flex-col gap-5">
      <div>
        <CardLabel>{t('influenciador.neuralConfidence.title')}</CardLabel>
        <CardTitle className="mt-1.5">{t('influenciador.neuralConfidence.title')}</CardTitle>
        <p className="mt-1 text-sm text-text-secondary">{t('influenciador.neuralConfidence.subtitle')}</p>
      </div>

      <ul className="space-y-5">
        {NEURAL_CONFIDENCE.map((row) => (
          <li key={row.key}>
            <ProgressBar
              label={t(`influenciador.neuralConfidence.${row.key}`)}
              value={row.value}
              showValue
              variant="primary"
              size="md"
            />
          </li>
        ))}
      </ul>
    </Card>
  )
}
