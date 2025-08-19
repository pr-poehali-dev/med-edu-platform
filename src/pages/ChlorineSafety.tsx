import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ChlorineHeader from '@/components/chlorine/ChlorineHeader';
import SignsSection from '@/components/chlorine/SignsSection';
import ActionsSection from '@/components/chlorine/ActionsSection';
import SimulatorSection from '@/components/chlorine/SimulatorSection';
import FirstAidSection from '@/components/chlorine/FirstAidSection';

const ChlorineSafety = () => {
  return (
    <div className="min-h-screen bg-white">
      <ChlorineHeader />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="signs" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="signs">Признаки утечки</TabsTrigger>
            <TabsTrigger value="actions">Алгоритм действий</TabsTrigger>
            <TabsTrigger value="simulator">Симулятор</TabsTrigger>
            <TabsTrigger value="firstaid">Первая помощь</TabsTrigger>
          </TabsList>

          <TabsContent value="signs" className="space-y-6">
            <SignsSection />
          </TabsContent>

          <TabsContent value="actions" className="space-y-6">
            <ActionsSection />
          </TabsContent>

          <TabsContent value="simulator" className="space-y-6">
            <SimulatorSection />
          </TabsContent>

          <TabsContent value="firstaid" className="space-y-6">
            <FirstAidSection />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ChlorineSafety;