import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const topPlayers = [
    { rank: 1, name: "xXDragonSlayerXx", kills: 15420, deaths: 2341, kd: 6.58 },
    { rank: 2, name: "NoobDestroyer", kills: 14230, deaths: 2890, kd: 4.92 },
    { rank: 3, name: "ShadowHunter", kills: 13567, deaths: 3120, kd: 4.35 },
    { rank: 4, name: "IronWarrior", kills: 12890, deaths: 3456, kd: 3.73 },
    { rank: 5, name: "NetherKing", kills: 11234, deaths: 3789, kd: 2.97 },
  ];

  const topDonators = [
    { rank: 1, name: "MegaWhale", amount: 25000, perks: "VIP++" },
    { rank: 2, name: "DiamondFan", amount: 18500, perks: "VIP+" },
    { rank: 3, name: "GoldSupporter", amount: 12300, perks: "VIP" },
    { rank: 4, name: "EmeraldLover", amount: 8900, perks: "Premium" },
    { rank: 5, name: "RedstonePro", amount: 6500, perks: "Premium" },
  ];

  const shopItems = [
    { name: "VIP", price: 500, features: ["Цветной ник", "Приват 10 чанков", "/fly команда"], color: "from-green-500 to-emerald-600" },
    { name: "VIP+", price: 1200, features: ["Все VIP", "Приват 25 чанков", "Киты раз в час", "/home 5 точек"], color: "from-blue-500 to-cyan-600" },
    { name: "VIP++", price: 2500, features: ["Все VIP+", "Приват 50 чанков", "Киты раз в 30 мин", "/home 10 точек", "Креатив режим"], color: "from-purple-500 to-pink-600" },
  ];

  const rules = [
    { title: "Читы", desc: "Запрещены вайлхак, флай, килл-аура. Разрешены: оптифайн, минимап", allowed: false },
    { title: "Гриф", desc: "Полная анархия. Грифь кого хочешь, но будь готов к отмщению", allowed: true },
    { title: "Дюпы", desc: "Дюп предметов запрещен. Использование будет караться баном", allowed: false },
    { title: "Доксинг", desc: "Публикация личной информации игроков строго запрещена", allowed: false },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-lg border-b border-green-500/20 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Swords" className="text-green-500" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                ANARCHY MC
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("home")} className="text-gray-300 hover:text-green-400 transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection("stats")} className="text-gray-300 hover:text-green-400 transition-colors">
                Статистика
              </button>
              <button onClick={() => scrollToSection("shop")} className="text-gray-300 hover:text-green-400 transition-colors">
                Магазин
              </button>
              <button onClick={() => scrollToSection("rules")} className="text-gray-300 hover:text-green-400 transition-colors">
                Правила
              </button>
              <button onClick={() => scrollToSection("monitoring")} className="text-gray-300 hover:text-green-400 transition-colors">
                Мониторинг
              </button>
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Discord
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent animate-fade-in">
            PURE ANARCHY
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-fade-in">
            Без правил. Без границ. Только выживание.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 animate-fade-in">
            <Card className="bg-black/50 border-green-500/30 backdrop-blur">
              <CardContent className="p-6 flex items-center gap-4">
                <Icon name="Server" className="text-green-500" size={32} />
                <div className="text-left">
                  <p className="text-sm text-gray-400">IP сервера</p>
                  <p className="text-2xl font-bold text-green-400">mc.anarchy.ru</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-black/50 border-green-500/30 backdrop-blur">
              <CardContent className="p-6 flex items-center gap-4">
                <Icon name="Users" className="text-green-500" size={32} />
                <div className="text-left">
                  <p className="text-sm text-gray-400">Игроков онлайн</p>
                  <p className="text-2xl font-bold text-green-400">247 / 500</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500/30 hover:border-green-500/50 transition-all hover:scale-105">
              <CardHeader>
                <Icon name="Zap" className="text-green-400 mx-auto mb-2" size={40} />
                <CardTitle className="text-green-400">Без вайпов</CardTitle>
                <CardDescription className="text-gray-400">Карта существует с 2019 года</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500/30 hover:border-green-500/50 transition-all hover:scale-105">
              <CardHeader>
                <Icon name="Flame" className="text-red-400 mx-auto mb-2" size={40} />
                <CardTitle className="text-red-400">PvP 24/7</CardTitle>
                <CardDescription className="text-gray-400">Сражайся с кем захочешь</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500/30 hover:border-green-500/50 transition-all hover:scale-105">
              <CardHeader>
                <Icon name="Trophy" className="text-yellow-400 mx-auto mb-2" size={40} />
                <CardTitle className="text-yellow-400">Рейтинг</CardTitle>
                <CardDescription className="text-gray-400">Стань легендой сервера</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="stats" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            СТАТИСТИКА
          </h2>

          <Tabs defaultValue="players" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 bg-black/50">
              <TabsTrigger value="players" className="data-[state=active]:bg-green-500/20">
                <Icon name="Sword" size={18} className="mr-2" />
                Топ игроков
              </TabsTrigger>
              <TabsTrigger value="donators" className="data-[state=active]:bg-green-500/20">
                <Icon name="Crown" size={18} className="mr-2" />
                Топ донатеров
              </TabsTrigger>
            </TabsList>

            <TabsContent value="players" className="space-y-4">
              {topPlayers.map((player) => (
                <Card key={player.rank} className="bg-black/50 border-green-500/30 hover:border-green-500/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                          player.rank === 1 ? "bg-yellow-500/20 text-yellow-400" :
                          player.rank === 2 ? "bg-gray-400/20 text-gray-400" :
                          player.rank === 3 ? "bg-orange-500/20 text-orange-400" :
                          "bg-green-500/20 text-green-400"
                        }`}>
                          #{player.rank}
                        </div>
                        <div>
                          <p className="text-xl font-bold text-white">{player.name}</p>
                          <p className="text-sm text-gray-400">K/D: {player.kd}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-bold text-lg">{player.kills} киллов</p>
                        <p className="text-red-400 text-sm">{player.deaths} смертей</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="donators" className="space-y-4">
              {topDonators.map((donor) => (
                <Card key={donor.rank} className="bg-black/50 border-purple-500/30 hover:border-purple-500/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                          donor.rank === 1 ? "bg-yellow-500/20 text-yellow-400" :
                          donor.rank === 2 ? "bg-gray-400/20 text-gray-400" :
                          donor.rank === 3 ? "bg-orange-500/20 text-orange-400" :
                          "bg-purple-500/20 text-purple-400"
                        }`}>
                          <Icon name="Crown" size={24} />
                        </div>
                        <div>
                          <p className="text-xl font-bold text-white">{donor.name}</p>
                          <Badge variant="outline" className="border-purple-500/50 text-purple-400">{donor.perks}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-purple-400 font-bold text-lg">{donor.amount}₽</p>
                        <p className="text-gray-400 text-sm">Поддержка</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="shop" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            МАГАЗИН
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {shopItems.map((item) => (
              <Card key={item.name} className="bg-black/50 border-green-500/30 hover:border-green-500/50 transition-all hover:scale-105 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                <CardHeader>
                  <CardTitle className="text-3xl text-center">{item.name}</CardTitle>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-green-400">{item.price}₽</p>
                    <p className="text-sm text-gray-400">навсегда</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-400 mt-1 flex-shrink-0" size={18} />
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                  <Button className={`w-full mt-4 bg-gradient-to-r ${item.color} hover:opacity-90`}>
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="monitoring" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            МОНИТОРИНГ СЕРВЕРА
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-black/50 border-green-500/30 hover:border-green-500/50 transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm text-gray-400">Статус</CardTitle>
                  <Icon name="Activity" className="text-green-400" size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-2xl font-bold text-green-400">Онлайн</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">Аптайм: 99.8%</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-green-500/30 hover:border-green-500/50 transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm text-gray-400">TPS</CardTitle>
                  <Icon name="Gauge" className="text-blue-400" size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-400">19.8</p>
                <p className="text-xs text-gray-500 mt-1">Отличная производительность</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-green-500/30 hover:border-green-500/50 transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm text-gray-400">Игроков</CardTitle>
                  <Icon name="Users" className="text-purple-400" size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-purple-400">247 / 500</p>
                <p className="text-xs text-gray-500 mt-1">Пик: 498 игроков</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-green-500/30 hover:border-green-500/50 transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm text-gray-400">Версия</CardTitle>
                  <Icon name="Code" className="text-yellow-400" size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-yellow-400">1.20.4</p>
                <p className="text-xs text-gray-500 mt-1">Paper / Spigot</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-black/50 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" className="text-green-400" size={24} />
                  Активность игроков
                </CardTitle>
                <CardDescription>За последние 24 часа</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-400">00:00 - 06:00</span>
                      <span className="text-sm font-bold text-blue-400">120 игроков</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '24%'}} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-400">06:00 - 12:00</span>
                      <span className="text-sm font-bold text-green-400">285 игроков</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{width: '57%'}} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-400">12:00 - 18:00</span>
                      <span className="text-sm font-bold text-yellow-400">412 игроков</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{width: '82%'}} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-400">18:00 - 00:00</span>
                      <span className="text-sm font-bold text-red-400">498 игроков</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-red-400 h-2 rounded-full" style={{width: '100%'}} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Cpu" className="text-green-400" size={24} />
                  Производительность
                </CardTitle>
                <CardDescription>Текущее состояние сервера</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">CPU</span>
                    <span className="text-sm font-bold text-green-400">42%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{width: '42%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">RAM</span>
                    <span className="text-sm font-bold text-blue-400">68%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full" style={{width: '68%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Диск</span>
                    <span className="text-sm font-bold text-purple-400">35%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full" style={{width: '35%'}} />
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-800">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-400">Загружено чанков</p>
                      <p className="text-lg font-bold text-green-400">12,847</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Энтити</p>
                      <p className="text-lg font-bold text-blue-400">3,291</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            ПРАВИЛА
          </h2>

          <div className="space-y-4">
            {rules.map((rule, idx) => (
              <Card key={idx} className={`bg-black/50 border-l-4 ${rule.allowed ? "border-l-green-500" : "border-l-red-500"}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{rule.title}</CardTitle>
                      <CardDescription className="text-gray-400">{rule.desc}</CardDescription>
                    </div>
                    <Badge variant={rule.allowed ? "default" : "destructive"} className="ml-4">
                      {rule.allowed ? "Разрешено" : "Запрещено"}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-green-500/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Swords" className="text-green-500" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              ANARCHY MC
            </span>
          </div>
          <p className="text-gray-400 mb-4">Легендарный сервер анархии с 2019 года</p>
          <div className="flex items-center justify-center gap-6">
            <Button variant="ghost" className="text-gray-400 hover:text-green-400">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Discord
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-green-400">
              <Icon name="Send" size={20} className="mr-2" />
              Telegram
            </Button>
          </div>
          <p className="text-gray-600 text-sm mt-8">© 2025 Anarchy MC. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;