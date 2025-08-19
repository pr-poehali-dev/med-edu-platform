import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const SimulatorSection = () => {
  const [simulatorStep, setSimulatorStep] = useState(0);
  const [simulatorScore, setSimulatorScore] = useState(0);

  const simulatorScenario = [
    {
      situation: "Вы услышали сирену химической тревоги и почувствовали резкий запах хлорки",
      options: [
        "Выйти на улицу посмотреть что происходит",
        "Закрыть окна и двери, включить радио/ТВ",
        "Немедленно покинуть здание"
      ],
      correct: 1,
      points: 10,
      feedback: "Правильно! Первое действие - изолироваться и получить информацию"
    },
    {
      situation: "По радио объявили об аварии на химзаводе. Ветер дует в вашу сторону",
      options: [
        "Остаться дома и ждать",
        "Эвакуироваться перпендикулярно направлению ветра",
        "Двигаться против ветра"
      ],
      correct: 1,
      points: 15,
      feedback: "Верно! Эвакуация должна быть перпендикулярно направлению ветра"
    },
    {
      situation: "При эвакуации вы видите пострадавшего с признаками отравления хлором",
      options: [
        "Немедленно оказать помощь на месте",
        "Вынести в безопасное место, затем оказать помощь",
        "Вызвать спасателей и продолжить эвакуацию"
      ],
      correct: 1,
      points: 20,
      feedback: "Правильно! Сначала нужно вынести пострадавшего из зоны поражения"
    }
  ];

  const handleSimulatorChoice = (choiceIndex: number) => {
    if (choiceIndex === simulatorScenario[simulatorStep].correct) {
      setSimulatorScore(simulatorScore + simulatorScenario[simulatorStep].points);
    }

    if (simulatorStep < simulatorScenario.length - 1) {
      setTimeout(() => setSimulatorStep(simulatorStep + 1), 2000);
    }
  };

  const resetSimulator = () => {
    setSimulatorStep(0);
    setSimulatorScore(0);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Симулятор экстренной ситуации</CardTitle>
        <CardDescription>
          Практические навыки принятия решений • Очки: {simulatorScore}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {simulatorStep < simulatorScenario.length ? (
          <div className="space-y-4">
            <Progress value={(simulatorStep / simulatorScenario.length) * 100} />
            <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">
                Ситуация {simulatorStep + 1}:
              </h4>
              <p className="mb-6 text-gray-700">
                {simulatorScenario[simulatorStep].situation}
              </p>
              <div className="space-y-3">
                {simulatorScenario[simulatorStep].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => handleSimulatorChoice(index)}
                    className="w-full justify-start text-left p-4 h-auto"
                  >
                    <span className="mr-3 font-semibold">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <div className="text-6xl">
              {simulatorScore >= 35 ? "🏆" : simulatorScore >= 25 ? "🥈" : "📖"}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Симуляция завершена!</h3>
              <p className="text-lg">Набрано очков: {simulatorScore} из 45</p>
              <Badge 
                variant={simulatorScore >= 35 ? "default" : simulatorScore >= 25 ? "secondary" : "destructive"}
                className="mt-2"
              >
                {simulatorScore >= 35 ? "Отлично" : simulatorScore >= 25 ? "Хорошо" : "Требует улучшения"}
              </Badge>
            </div>
            <Button onClick={resetSimulator}>Пройти заново</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SimulatorSection;