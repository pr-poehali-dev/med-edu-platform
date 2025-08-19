import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

const ChlorineHeader = () => {
  return (
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
  );
};

export default ChlorineHeader;