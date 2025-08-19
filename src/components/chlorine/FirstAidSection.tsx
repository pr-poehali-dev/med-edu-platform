import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

const FirstAidSection = () => {
  return (
    <div className="space-y-6">
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

      {/* Экстренные контакты */}
      <Card className="bg-red-50 border-red-200">
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
    </div>
  );
};

export default FirstAidSection;