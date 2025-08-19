import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const emergencyItems = [
    {
      title: "Первая помощь при кровотечении",
      description: "Немедленные действия при артериальном кровотечении",
      urgency: "critical"
    },
    {
      title: "Сердечно-легочная реанимация",
      description: "Алгоритм СЛР для взрослых",
      urgency: "critical"
    },
    {
      title: "Эвакуация при пожаре",
      description: "Маршруты эвакуации и правила поведения",
      urgency: "high"
    },
    {
      title: "Первая помощь при отравлении",
      description: "Действия при различных видах отравлений",
      urgency: "high"
    }
  ];

  const materials = [
    {
      id: 1,
      title: "Анатомия человека",
      description: "Полный курс анатомии с интерактивными схемами",
      category: "medicine",
      type: "course",
      level: "beginner",
      image: "/img/ebce0511-d44e-4c99-9abd-8d15573d0cde.jpg",
      rating: 4.8,
      students: 1200
    },
    {
      id: 2,
      title: "Основы фармакологии",
      description: "Изучение лекарственных препаратов и их действия",
      category: "medicine",
      type: "video",
      level: "intermediate",
      image: "/img/ebce0511-d44e-4c99-9abd-8d15573d0cde.jpg",
      rating: 4.9,
      students: 850
    },
    {
      id: 3,
      title: "Пожарная безопасность",
      description: "Правила пожарной безопасности на производстве",
      category: "safety",
      type: "manual",
      level: "beginner",
      image: "/img/535b2ace-fbbb-494f-a54b-5dbbe42797aa.jpg",
      rating: 4.7,
      students: 2100
    },
    {
      id: 4,
      title: "Первая медицинская помощь",
      description: "Практические навыки оказания первой помощи",
      category: "medicine",
      type: "practice",
      level: "beginner",
      image: "/img/ebce0511-d44e-4c99-9abd-8d15573d0cde.jpg",
      rating: 4.9,
      students: 3200
    },
    {
      id: 5,
      title: "Техника безопасности в лаборатории",
      description: "Правила работы с химическими веществами",
      category: "safety",
      type: "guide",
      level: "intermediate",
      image: "/img/535b2ace-fbbb-494f-a54b-5dbbe42797aa.jpg",
      rating: 4.6,
      students: 750
    },
    {
      id: 6,
      title: "Инфекционные заболевания",
      description: "Профилактика и лечение инфекционных болезней",
      category: "medicine",
      type: "course",
      level: "advanced",
      image: "/img/ebce0511-d44e-4c99-9abd-8d15573d0cde.jpg",
      rating: 4.8,
      students: 920
    }
  ];

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return 'BookOpen';
      case 'video': return 'Play';
      case 'manual': return 'FileText';
      case 'practice': return 'Activity';
      case 'guide': return 'Info';
      default: return 'File';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'beginner': return 'Начальный';
      case 'intermediate': return 'Средний';
      case 'advanced': return 'Продвинутый';
      default: return level;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold tracking-tight text-black">
                МЕДПРОМА
              </h1>
              <nav className="hidden md:flex space-x-8">
                <Button variant="ghost" className="text-black hover:text-gray-600">
                  Медицина
                </Button>
                <Button variant="ghost" className="text-black hover:text-gray-600">
                  БЖД
                </Button>
                <Button variant="ghost" className="text-black hover:text-gray-600">
                  Библиотека
                </Button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Поиск материалов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Emergency Section */}
      <section className="bg-red-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <Icon name="AlertTriangle" size={24} className="text-white" />
            <h2 className="text-2xl font-bold">ЭКСТРЕННЫЕ РЕКОМЕНДАЦИИ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {emergencyItems.map((item, index) => (
              <Card key={index} className="bg-white text-black hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-600">{item.description}</p>
                  <Badge 
                    variant={item.urgency === 'critical' ? 'destructive' : 'secondary'} 
                    className="mt-2 text-xs"
                  >
                    {item.urgency === 'critical' ? 'Критично' : 'Важно'}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Filter */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-96">
            <TabsTrigger value="all">Все материалы</TabsTrigger>
            <TabsTrigger value="medicine">Медицина</TabsTrigger>
            <TabsTrigger value="safety">БЖД</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material) => (
            <Card key={material.id} className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img 
                  src={material.image} 
                  alt={material.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-white text-black">
                    <Icon name={getTypeIcon(material.type)} size={12} className="mr-1" />
                    {material.type === 'course' && 'Курс'}
                    {material.type === 'video' && 'Видео'}
                    {material.type === 'manual' && 'Пособие'}
                    {material.type === 'practice' && 'Практика'}
                    {material.type === 'guide' && 'Руководство'}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-semibold text-black line-clamp-2">
                    {material.title}
                  </CardTitle>
                  <Badge className={getLevelColor(material.level)}>
                    {getLevelText(material.level)}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600 line-clamp-2">
                  {material.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                      <span>{material.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={16} />
                      <span>{material.students}</span>
                    </div>
                  </div>
                  <Button size="sm" className="bg-black text-white hover:bg-gray-800">
                    Открыть
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Материалы не найдены</h3>
            <p className="text-gray-600">Попробуйте изменить поисковый запрос или выбрать другую категорию</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-black mb-3">МЕДПРОМА</h3>
              <p className="text-sm text-gray-600">
                Образовательная платформа для изучения медицины и безопасности жизнедеятельности
              </p>
            </div>
            <div>
              <h4 className="font-medium text-black mb-3">Разделы</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Медицина</a></li>
                <li><a href="#" className="hover:text-black">БЖД</a></li>
                <li><a href="#" className="hover:text-black">Экстренные случаи</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-black mb-3">Материалы</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Курсы</a></li>
                <li><a href="#" className="hover:text-black">Видеоуроки</a></li>
                <li><a href="#" className="hover:text-black">Пособия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-black mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Помощь</a></li>
                <li><a href="#" className="hover:text-black">Контакты</a></li>
                <li><a href="#" className="hover:text-black">О проекте</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-600">
            © 2024 МЕДПРОМА. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;