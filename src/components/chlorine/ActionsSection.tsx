import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

const ActionsSection = () => {
  const actionSteps = [
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
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Пошаговый алгоритм действий</CardTitle>
          <CardDescription>Четкая последовательность действий при утечке хлора</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {actionSteps.map((item) => (
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
    </div>
  );
};

export default ActionsSection;