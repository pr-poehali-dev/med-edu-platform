import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

const SignsSection = () => {
  const [currentTest, setCurrentTest] = useState(0);
  const [testScore, setTestScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
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

  const resetTest = () => {
    setCurrentTest(0);
    setTestScore(0);
    setShowResults(false);
    setSelectedAnswers([]);
  };

  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default SignsSection;