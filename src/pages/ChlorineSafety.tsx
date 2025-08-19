import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const ChlorineSafety = () => {
  const [currentTest, setCurrentTest] = useState(0);
  const [testScore, setTestScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [simulatorStep, setSimulatorStep] = useState(0);
  const [simulatorScore, setSimulatorScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const recognitionTest = [
    {
      question: "Какой характерный запах имеет хлор?",
      options: ["Сладкий", "Резкий хлорный", "Без запаха", "Кислый"],
      correct: 1,
      explanation: "Хлор имеет резкий, раздражающий запах, похожий на хлорку"
    },
    {
      question: "Какого цвета дым при утечке хлора?",
      options: ["Белый", "Черный", "Желтовато-зеленый", "Синий"],
      correct: 2,
      explanation: "Хлор образует характерный желтовато-зеленый дым"
    },
    {
      question: "Первые признаки отравления хлором:",
      options: ["Головная боль", "Кашель и слезотечение", "Тошнота", "Все перечисленное"],
      correct: 3,
      explanation: "Хлор поражает дыхательные пути и глаза, вызывая комплекс симптомов"
    }
  ];

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

  const handleTestAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentTest] = answerIndex;
    setSelectedAnswers(newAnswers);

    if (answerIndex === recognitionTest[currentTest].correct) {
      setTestScore(testScore + 1);
    }

    if (currentTest < recognitionTest.length - 1) {
      setTimeout(() => setCurrentTest(currentTest + 1), 1500);
    } else {
      setTimeout(() => setShowResults(true), 1500);
    }
  };

  const handleSimulatorChoice = (choiceIndex: number) => {
    if (choiceIndex === simulatorScenario[simulatorStep].correct) {
      setSimulatorScore(simulatorScore + simulatorScenario[simulatorStep].points);
    }

    if (simulatorStep < simulatorScenario.length - 1) {
      setTimeout(() => setSimulatorStep(simulatorStep + 1), 2000);
    }
  };

  const resetTest = () => {
    setCurrentTest(0);
    setTestScore(0);
    setShowResults(false);
    setSelectedAnswers([]);
  };

  const resetSimulator = () => {
    setSimulatorStep(0);
    setSimulatorScore(0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-yellow-400 text-black py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <Icon name="AlertTriangle" size={32} className="text-red-600" />
            <h1 className="text-3xl font-bold">
              УТЕЧКА ХЛОРА: ЧТО ДЕЛАТЬ В ЭКСТРЕННОЙ СИТУАЦИИ
            </h1>
          </div>
          <Alert className="bg-red-100 border-red-500">
            <Icon name="AlertCircle" className="h-4 w-4" />
            <AlertTitle className="text-red-800">Критически важная информация</AlertTitle>
            <AlertDescription className="text-red-700">
              Ежегодно в мире происходит более 200 аварий с выбросом хлора. 
              Знание правил поведения может спасти жизнь!
            </AlertDescription>
          </Alert>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="signs" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="signs">Признаки утечки</TabsTrigger>
            <TabsTrigger value="actions">Алгоритм действий</TabsTrigger>
            <TabsTrigger value="simulator">Симулятор</TabsTrigger>
            <TabsTrigger value="firstaid">Первая помощь</TabsTrigger>
          </TabsList>

          {/* Признаки утечки */}
          <TabsContent value="signs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Eye" size={24} />
                  <span>Признаки утечки хлора</span>
                </CardTitle>
                <CardDescription>
                  Научитесь распознавать опасность на ранней стадии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src="/img/134b9d46-3c9f-4b7f-8908-0de7239fcfd1.jpg" 
                      alt="Утечка хлора"
                      className="w-full rounded-lg mb-4"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Badge variant="destructive">!</Badge>
                      <div>
                        <h4 className="font-semibold">Резкий запах хлорки</h4>
                        <p className="text-sm text-gray-600">Характерный едкий запах, даже в малых концентрациях</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-yellow-500">!</Badge>
                      <div>
                        <h4 className="font-semibold">Желтовато-зеленый дым</h4>
                        <p className="text-sm text-gray-600">Характерный цвет облака хлора</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Badge variant="secondary">!</Badge>
                      <div>
                        <h4 className="font-semibold">Кашель у людей</h4>
                        <p className="text-sm text-gray-600">Раздражение дыхательных путей</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Badge variant="outline">!</Badge>
                      <div>
                        <h4 className="font-semibold">Звуки сирен</h4>
                        <p className="text-sm text-gray-600">Сигналы химической тревоги</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Интерактивный тест */}
            <Card>
              <CardHeader>
                <CardTitle>Тест: Распознавание признаков</CardTitle>
                <CardDescription>
                  Проверьте свои знания ({currentTest + 1} из {recognitionTest.length})
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!showResults ? (
                  <div className="space-y-4">
                    <Progress value={(currentTest / recognitionTest.length) * 100} />
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-3">{recognitionTest[currentTest].question}</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {recognitionTest[currentTest].options.map((option, index) => (
                          <Button
                            key={index}
                            variant={selectedAnswers[currentTest] === index ? 
                              (index === recognitionTest[currentTest].correct ? "default" : "destructive") : 
                              "outline"
                            }
                            onClick={() => handleTestAnswer(index)}
                            disabled={selectedAnswers[currentTest] !== undefined}
                            className="justify-start text-left"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                      {selectedAnswers[currentTest] !== undefined && (
                        <Alert className="mt-4">
                          <Icon name="Info" className="h-4 w-4" />
                          <AlertDescription>
                            {recognitionTest[currentTest].explanation}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="text-6xl">{testScore === recognitionTest.length ? "🎉" : "📚"}</div>
                    <h3 className="text-xl font-bold">
                      Результат: {testScore} из {recognitionTest.length}
                    </h3>
                    <p className="text-gray-600">
                      {testScore === recognitionTest.length 
                        ? "Отлично! Вы готовы к распознаванию опасности" 
                        : "Рекомендуем повторить материал"}
                    </p>
                    <Button onClick={resetTest}>Пройти еще раз</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Алгоритм действий */}
          <TabsContent value="actions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Пошаговый алгоритм действий</CardTitle>
                <CardDescription>Четкая последовательность действий при утечке хлора</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Обнаружение опасности",
                      actions: ["Почувствовали запах хлора", "Услышали сирену", "Увидели желто-зеленый дым"],
                      icon: "AlertTriangle"
                    },
                    {
                      step: 2,
                      title: "Немедленная изоляция",
                      actions: ["Закрыть все окна и двери", "Выключить вентиляцию", "Заткнуть щели мокрой тканью"],
                      icon: "Shield"
                    },
                    {
                      step: 3,
                      title: "Получение информации",
                      actions: ["Включить радио/ТВ", "Следить за сообщениями МЧС", "Не паниковать"],
                      icon: "Radio"
                    },
                    {
                      step: 4,
                      title: "Эвакуация (при необходимости)",
                      actions: ["Надеть влажную маску", "Двигаться перпендикулярно ветру", "Избегать низин"],
                      icon: "ArrowRight"
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name={item.icon as any} size={20} />
                          <h4 className="font-semibold">{item.title}</h4>
                        </div>
                        <ul className="space-y-1">
                          {item.actions.map((action, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                              <Icon name="Check" size={16} className="text-green-600" />
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Alert className="border-red-200 bg-red-50">
              <Icon name="XCircle" className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800">Типичные ошибки</AlertTitle>
              <AlertDescription className="text-red-700">
                <ul className="mt-2 space-y-1">
                  <li>• Попытка покинуть здание без защиты дыхания</li>
                  <li>• Движение по направлению ветра</li>
                  <li>• Спуск в подвалы и низины (хлор тяжелее воздуха)</li>
                  <li>• Игнорирование сигналов оповещения</li>
                </ul>
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Симулятор действий */}
          <TabsContent value="simulator" className="space-y-6">
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
          </TabsContent>

          {/* Первая помощь */}
          <TabsContent value="firstaid" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Первая помощь при отравлении хлором</CardTitle>
                <CardDescription>Жизненно важные действия по спасению пострадавших</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src="/img/6ee4b1d2-a450-4ef1-854f-f891139b91de.jpg" 
                      alt="Первая помощь"
                      className="w-full rounded-lg mb-4"
                    />
                  </div>
                  <div className="space-y-4">
                    <Alert className="border-blue-200 bg-blue-50">
                      <Icon name="Heart" className="h-4 w-4 text-blue-600" />
                      <AlertTitle className="text-blue-800">Срочные действия</AlertTitle>
                      <AlertDescription className="text-blue-700">
                        <ol className="mt-2 space-y-1 list-decimal list-inside">
                          <li>Вынести пострадавшего на свежий воздух</li>
                          <li>Расстегнуть стесняющую одежду</li>
                          <li>Обеспечить покой в полусидячем положении</li>
                          <li>Промыть глаза и кожу чистой водой</li>
                          <li>При остановке дыхания - ИВЛ</li>
                          <li>Срочно вызвать скорую помощь</li>
                        </ol>
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">При поражении глаз</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <Icon name="Droplets" size={16} className="text-blue-500 mt-0.5" />
                      <span>Промывать 15-20 минут чистой водой</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="EyeOff" size={16} className="text-gray-500 mt-0.5" />
                      <span>Не тереть глаза</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Phone" size={16} className="text-red-500 mt-0.5" />
                      <span>Немедленно к офтальмологу</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">При поражении кожи</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <Icon name="Droplets" size={16} className="text-blue-500 mt-0.5" />
                      <span>Снять загрязненную одежду</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Waves" size={16} className="text-blue-500 mt-0.5" />
                      <span>Промыть большим количеством воды</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Ban" size={16} className="text-red-500 mt-0.5" />
                      <span>Не использовать мази и кремы</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Экстренные контакты */}
        <Card className="mt-8 bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-red-800">Экстренные службы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <Icon name="Phone" size={24} className="mx-auto mb-2 text-red-600" />
                <div className="font-bold text-lg">112</div>
                <div className="text-sm text-gray-600">Единая служба экстренного вызова</div>
              </div>
              <div>
                <Icon name="Truck" size={24} className="mx-auto mb-2 text-orange-600" />
                <div className="font-bold text-lg">101</div>
                <div className="text-sm text-gray-600">Пожарная служба и МЧС</div>
              </div>
              <div>
                <Icon name="Heart" size={24} className="mx-auto mb-2 text-green-600" />
                <div className="font-bold text-lg">103</div>
                <div className="text-sm text-gray-600">Скорая медицинская помощь</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ChlorineSafety;