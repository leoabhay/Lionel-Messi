import React, { useState } from 'react';
import { Trophy, Award, Users, Heart, Star, Target, Shirt, Home, User, Image, Menu, X, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ChevronRight, ArrowRight } from 'lucide-react';

const MessiWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'bio', name: 'Biography', icon: User },
    { id: 'family', name: 'Family', icon: Users },
    { id: 'clubs', name: 'Clubs', icon: Shirt },
    { id: 'goals', name: 'Statistics', icon: Target },
    { id: 'trophies', name: 'Trophies', icon: Trophy },
    { id: 'moments', name: 'Best Moments', icon: Star },
    { id: 'gallery', name: 'Gallery', icon: Image }
  ];

  const Footer = () => (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">LIONEL MESSI</h3>
            <p className="text-gray-400 mb-4">
              The greatest footballer of all time. 8x Ballon d'Or winner, World Cup champion, and global icon.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setCurrentPage('bio')} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" /> Biography
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('clubs')} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" /> Career
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('trophies')} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" /> Achievements
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('gallery')} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" /> Gallery
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Career Stats</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Target className="w-4 h-4 text-green-400" /> 850+ Career Goals
              </li>
              <li className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-400" /> 45+ Trophies Won
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-400" /> 8 Ballon d'Or
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-blue-400" /> 1 World Cup
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-red-400" />
                <span>Miami, USA / Rosario, Argentina</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-1 text-blue-400" />
                <span>abhaycdry10@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1 text-green-400" />
                <span>+977 9800000000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Lionel Messi Fan Website. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-purple-950 to-pink-950">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center text-white">
            <div className="mb-6 inline-block">
              <span className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold text-sm tracking-wider">
                🏆 2022 WORLD CUP CHAMPION
              </span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              LIONEL MESSI
            </h1>
            
            <p className="text-3xl md:text-5xl mb-4 font-light text-blue-200">The Greatest of All Time</p>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
              8x Ballon d'Or Winner • 896+ Goals • 48+ Trophies • World Cup Champion
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button 
                onClick={() => setCurrentPage('bio')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Explore Biography <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setCurrentPage('trophies')}
                className="bg-white bg-opacity-10 backdrop-blur-lg hover:bg-opacity-20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 border border-white border-opacity-30"
              >
                View Trophies
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all transform hover:scale-105">
                <Trophy className="w-10 h-10 mx-auto mb-3 text-yellow-400" />
                <p className="text-4xl font-bold mb-2">45+</p>
                <p className="text-sm text-gray-300">Career Trophies</p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all transform hover:scale-105">
                <Target className="w-10 h-10 mx-auto mb-3 text-green-400" />
                <p className="text-4xl font-bold mb-2">850+</p>
                <p className="text-sm text-gray-300">Career Goals</p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all transform hover:scale-105">
                <Award className="w-10 h-10 mx-auto mb-3 text-purple-400" />
                <p className="text-4xl font-bold mb-2">8</p>
                <p className="text-sm text-gray-300">Ballon d'Or Awards</p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all transform hover:scale-105">
                <Star className="w-10 h-10 mx-auto mb-3 text-blue-400" />
                <p className="text-4xl font-bold mb-2">1</p>
                <p className="text-sm text-gray-300">World Cup</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">About Leo</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl h-96 flex items-center justify-center overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                  <img 
                    src="/bio.jpg" 
                    alt="Lionel Messi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-blue-400">The Journey of a Legend</h3>
                <p className="text-lg leading-relaxed text-gray-300">
                  Born on June 24, 1987, in Rosario, Argentina, Lionel Andrés Messi overcame growth hormone deficiency 
                  as a child to become the greatest footballer of all time. His journey from a small city in Argentina 
                  to conquering the world is nothing short of extraordinary.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  With unparalleled dribbling skills, vision, and goal-scoring ability, Messi has won every major 
                  trophy in football, including the coveted FIFA World Cup in 2022, finally silencing all doubters 
                  and cementing his legacy as the undisputed GOAT.
                </p>
                <button 
                  onClick={() => setCurrentPage('bio')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  Read Full Biography <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Career Highlights</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-opacity-20 transition-all transform hover:scale-105 border border-white border-opacity-20">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/worldcup.jpg" 
                  alt="World Cup 2022"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-4">World Cup 2022</h3>
                <p className="text-gray-300">
                  Led Argentina to World Cup glory in Qatar, scoring 7 goals and winning the Golden Ball award. 
                  The crowning achievement of his legendary career.
                </p>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-opacity-20 transition-all transform hover:scale-105 border border-white border-opacity-20">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/barca.jpg" 
                  alt="Barcelona Era"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="text-6xl mb-4">⚽</div>
                <h3 className="text-2xl font-bold mb-4">Barcelona Era</h3>
                <p className="text-gray-300">
                  672 goals in 778 appearances for Barcelona, winning 35 trophies including 4 Champions League titles. 
                  Formed the greatest team in football history.
                </p>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-opacity-20 transition-all transform hover:scale-105 border border-white border-opacity-20">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/ballon.jpg" 
                  alt="8 Ballon d'Or"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="text-6xl mb-4">🥇</div>
                <h3 className="text-2xl font-bold mb-4">8 Ballon d'Or</h3>
                <p className="text-gray-300">
                  Record 8 Ballon d'Or awards, more than any other player in history. A testament to his consistent 
                  excellence over two decades.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('moments')}
              className="bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
            >
              View All Best Moments <Star className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">By The Numbers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Statistics that define greatness</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-opacity-20 transition-all transform hover:scale-105">
              <p className="text-5xl font-bold text-yellow-400 mb-2">896+</p>
              <p className="text-sm text-gray-300">Career Goals</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-opacity-20 transition-all transform hover:scale-105">
              <p className="text-5xl font-bold text-blue-400 mb-2">407+</p>
              <p className="text-sm text-gray-300">Assists</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-opacity-20 transition-all transform hover:scale-105">
              <p className="text-5xl font-bold text-green-400 mb-2">1137+</p>
              <p className="text-sm text-gray-300">Matches</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-opacity-20 transition-all transform hover:scale-105">
              <p className="text-5xl font-bold text-purple-400 mb-2">48+</p>
              <p className="text-sm text-gray-300">Trophies</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-opacity-20 transition-all transform hover:scale-105">
              <p className="text-5xl font-bold text-pink-400 mb-2">91</p>
              <p className="text-sm text-gray-300">Goals in 2012</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-opacity-20 transition-all transform hover:scale-105">
              <p className="text-5xl font-bold text-red-400 mb-2">8</p>
              <p className="text-sm text-gray-300">Ballon d'Or</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('goals')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
            >
              View Full Statistics <Target className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-purple-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Explore the Legend</h2>
            <p className="text-xl text-gray-300 mb-12">
              Dive deeper into the life, career, and achievements of the greatest footballer of all time
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <button 
                onClick={() => setCurrentPage('gallery')}
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white p-8 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Image className="w-8 h-8" />
                View Gallery
              </button>

              <button 
                onClick={() => setCurrentPage('family')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-8 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Heart className="w-8 h-8" />
                Meet the Family
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );

  const BiographyPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 text-center">Biography</h2>
  
          {/* Cover Image */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/messi.jpg"
                alt="Lionel Messi Biography"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
  
          <div className="max-w-4xl mx-auto space-y-6">
  
            {/* Early Life */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-blue-300">Early Life</h3>
              <p className="text-lg leading-relaxed mb-4">
                Lionel Andrés Messi was born on June 24, 1987, in Rosario, Argentina, to Jorge Messi and
                Celia Cuccittini. From a very young age, his exceptional talent with the ball was evident.
                He began playing football at age five for Grandoli, a local club coached by his father.
              </p>
              <p className="text-lg leading-relaxed">
                At 11, Messi was diagnosed with growth hormone deficiency. With limited financial
                support in Argentina, his future looked uncertain until FC Barcelona offered to pay for
                his treatment and bring him to Spain. This bold move laid the foundation for one of the
                greatest football careers in history.
              </p>
            </div>
  
            {/* Barcelona Era */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-blue-300">Barcelona Era (2004–2021)</h3>
              <p className="text-lg leading-relaxed mb-4">
                Messi made his official debut for FC Barcelona in 2004 at just 17 years old. Over the
                next 17 seasons, he became the symbol of the club, redefining greatness with his
                dribbling, vision, and goal-scoring ability.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Under Pep Guardiola, Messi reached historic heights, winning multiple Ballon d’Or
                awards and leading Barcelona to a golden era of dominance. His record-breaking 91 goals
                in 2012 remains unmatched in modern football.
              </p>
              <p className="text-lg leading-relaxed">
                By the time he left Barcelona in 2021, Messi had scored 672 goals in 778 appearances,
                making him the club’s all-time leading scorer and a global football icon.
              </p>
            </div>
  
            {/* PSG Era */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-blue-300">
                Paris Saint-Germain (2021–2023)
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                After an emotional departure from Barcelona due to financial constraints, Messi joined
                Paris Saint-Germain in 2021. His arrival marked one of the biggest transfers in football
                history.
              </p>
              <p className="text-lg leading-relaxed">
                Playing alongside Neymar and Kylian Mbappé, Messi won multiple Ligue 1 titles and
                adapted his game into a deeper playmaking role, contributing goals, assists, and
                leadership at the highest level of European football.
              </p>
            </div>
  
            {/* Inter Miami Era */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-blue-300">
                Inter Miami (2023–Present)
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                In 2023, Messi made a historic move to Inter Miami, transforming Major League Soccer
                overnight. His arrival brought global attention to the league and elevated football’s
                popularity across North America.
              </p>
              <p className="text-lg leading-relaxed">
                Messi led Inter Miami to their first-ever trophy by winning the Leagues Cup in his
                debut tournament, delivering unforgettable moments and proving his influence goes
                beyond goals.
              </p>
            </div>
  
            {/* Argentina Glory */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-blue-300">Argentina Glory</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Lionel Messi made his senior debut for Argentina in August 2005 at just
                  18 years old. From his early days, he carried enormous expectations and
                  experienced both brilliance and heartbreak, including final defeats in
                  the 2014 FIFA World Cup and multiple Copa América tournaments. Despite
                  criticism and a brief international retirement in 2016, Messi remained
                  committed to his national team.
              </p>

              <p className="text-lg leading-relaxed">
                His perseverance was rewarded in 2021 when he captained Argentina to Copa
                América victory, followed by a historic 2022 FIFA World Cup triumph in
                Qatar. As Argentina’s all-time leading scorer and most-capped player,
                Messi’s journey from a young debutant to a World Cup–winning captain
                cemented his legacy as a national icon and one of football’s greatest
                players.
              </p>
            </div>
  
          </div>
        </div>
      </div>
  
      <Footer />
    </div>
  );
  

  const FamilyPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 text-white">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Heart className="w-12 h-12" /> Family
          </h2>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/family1.jpg" 
                alt="Messi Family"
                className="w-full h-70 object-cover"
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
              <div className="mb-4 rounded-lg overflow-hidden h-48">
                <img 
                  src="/marriage.jpg" 
                  alt="Antonela Roccuzzo"
                  className="w-full h-68 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pink-300">Wife - Antonela Roccuzzo</h3>
              <p className="leading-relaxed">
                Messi married his childhood sweetheart Antonela Roccuzzo on June 30, 2017, in their hometown of Rosario. 
                They have known each other since they were five years old. Antonela is a model and social media personality 
                with millions of followers. Their love story is considered one of football's most romantic.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
              <div className="mb-4 rounded-lg overflow-hidden h-48">
                <img 
                  src="/family3.jpg" 
                  alt="Messi Children"
                  className="w-full h-68 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pink-300">Children</h3>
              <ul className="space-y-3">
                <li><strong>Thiago Messi</strong> - Born November 2, 2012</li>
                <li><strong>Mateo Messi</strong> - Born September 11, 2015</li>
                <li><strong>Ciro Messi</strong> - Born March 10, 2018</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Messi is a devoted father who often shares moments with his sons. Thiago and Mateo are already showing 
                interest in football, with Thiago playing in Inter Miami's youth academy.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-pink-300">Parents</h3>
              <p className="leading-relaxed mb-3">
                <strong>Jorge Messi</strong> - Father, factory steel worker turned football agent. He has been instrumental 
                in managing Lionel's career and finances.
              </p>
              <p className="leading-relaxed">
                <strong>Celia Cuccittini</strong> - Mother, worked in a magnet manufacturing workshop. She has always been 
                a pillar of support for Lionel throughout his career.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-pink-300">Siblings</h3>
              <ul className="space-y-3 leading-relaxed">
                <li><strong>Rodrigo Messi</strong> - Older brother</li>
                <li><strong>Matías Messi</strong> - Older brother</li>
                <li><strong>María Sol Messi</strong> - Younger sister, businesswoman and social media influencer</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                The Messi family remains very close-knit, with Lionel maintaining strong ties to his roots in Rosario, Argentina.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

  const ClubsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-orange-900 text-white">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Shirt className="w-12 h-12" /> Club Career
          </h2>
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
              <img src="/barcelona.svg" alt="FC Barcelona" className="w-14 h-14"/>
                <div>
                  <h3 className="text-3xl font-bold text-red-300">FC Barcelona</h3>
                  <p className="text-xl">2004 - 2021 (17 years)</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div>
                  <p className="text-lg mb-2"><strong>Appearances:</strong> 778</p>
                  <p className="text-lg mb-2"><strong>Goals:</strong> 672</p>
                  <p className="text-lg mb-2"><strong>Assists:</strong> 303</p>
                </div>
                <div>
                  <p className="text-lg mb-2"><strong>Trophies:</strong> 35</p>
                  <p className="text-lg mb-2"><strong>La Liga:</strong> 10 (2004/05, 2005/06, 2008/09, 2009/10, 2010/11, 2012/13, 2014/15, 2015/16, 2017/18, 2018/19)</p>
                  <p className="text-lg mb-2"><strong>UEFA Champions League:</strong> 4 (2005/06, 2008/09, 2010/11, 2015/15)</p>
                  <p className="text-lg mb-2"><strong>FIFA Club World Cup:</strong> 3 (2009, 2011, 2015)</p>
                  <p className="text-lg mb-2"><strong>UEFA Super Cup:</strong> 3 (2009, 2011, 2015)</p>
                  <p className="text-lg mb-2"><strong>Copa del Rey:</strong> 7 (2008/09, 2011/12, 2014/15, 2015/16, 2016/17, 2017/18, 2020/21)</p>
                  <p className="text-lg mb-2"><strong>Supercopa de España: 8 (2006, 2009, 2010, 2011, 2013, 2016, 2018, 2020)</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
              <img src="/psg.svg" alt="Paris Saint-Germain" className="w-14 h-14"/>
                <div>
                  <h3 className="text-3xl font-bold text-blue-300">Paris Saint-Germain</h3>
                  <p className="text-xl">2021 - 2023 (2 years)</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div>
                  <p className="text-lg mb-2"><strong>Appearances:</strong> 75</p>
                  <p className="text-lg mb-2"><strong>Goals:</strong> 32</p>
                  <p className="text-lg mb-2"><strong>Assists:</strong> 35</p>
                </div>
                <div>
                  <p className="text-lg mb-2"><strong>Trophies:</strong> 3</p>
                  <p className="text-lg mb-2"><strong>Ligue 1:</strong> 2 (2021/22, 2022/23)</p>
                  <p className="text-lg mb-2"><strong>French Super Cup:</strong> 1 (2022)</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
              <img src="/intermiami.svg" alt="Inter Miami CF" className="w-14 h-14"/>
                <div>
                  <h3 className="text-3xl font-bold text-pink-300">Inter Miami CF</h3>
                  <p className="text-xl">2023 - Present</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div>
                  <p className="text-lg mb-2"><strong>Appearances:</strong> 88+</p>
                  <p className="text-lg mb-2"><strong>Goals:</strong> 77+</p>
                  <p className="text-lg mb-2"><strong>Assists:</strong> 43+</p>
                </div>
                <div>
                  <p className="text-lg mb-2"><strong>Trophies:</strong> 4</p>
                  <p className="text-lg mb-2"><strong>MLS Cup:</strong> 1 (2025)</p>
                  <p className="text-lg mb-2"><strong>MLS Eastern Conference:</strong> 1 (2025)</p>
                  <p className="text-lg mb-2"><strong>Supporters Shield:</strong> 1 (2024)</p>
                  <p className="text-lg mb-2"><strong>Leagues Cup:</strong> 1 (2023)</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
              <img src="/argentina.svg" alt="Argentina National Team" className="w-14 h-14"/>
                <div>
                  <h3 className="text-3xl font-bold text-sky-300">Argentina National Team</h3>
                  <p className="text-xl">2005 - Present</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div>
                  <p className="text-lg mb-2"><strong>Appearances:</strong> 196+</p>
                  <p className="text-lg mb-2"><strong>Goals:</strong> 115+</p>
                  <p className="text-lg mb-2"><strong>Assists:</strong> 61+</p>
                </div>
                <div>
                <p className="text-lg mb-2"><strong>Trophies:</strong> 5</p>
                  <p className="text-lg mb-2"><strong>FIFA World Cup:</strong> 1 (2022)</p>
                  <p className="text-lg mb-2"><strong>Copa América:</strong> 2 (2021, 2024)</p>
                  <p className="text-lg mb-2"><strong>finalissima:</strong> 1 (2022)</p>
                  <p className="text-lg mb-2"><strong>Olympic Gold Medal:</strong> 1 (2008)</p>
                  <p className="text-lg mb-2"><strong>FIFA U-20 World Cup:</strong> 1 (2005)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

  const GoalsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-teal-900 text-white">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Target className="w-12 h-12" /> Statistics
          </h2>
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-green-300">Career Statistics Overview</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-5xl font-bold text-yellow-400">896+</p>
                  <p className="text-xl mt-2">Career Goals</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-blue-400">407+</p>
                  <p className="text-xl mt-2">Career Assists</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-pink-400">1137+</p>
                  <p className="text-xl mt-2">Appearances</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-green-400">91</p>
                  <p className="text-xl mt-2">Goals in 2012</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
  <h3 className="text-3xl font-bold mb-6 text-green-300">
    Record-Breaking Achievements
  </h3>

  <div className="space-y-4">
    <div className="flex items-start gap-3">
      <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
      <p className="text-lg">Most goals in a calendar year: 91 goals (2012)</p>
    </div>

    <div className="flex items-start gap-3">
      <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
      <p className="text-lg">Most goals for a single club: 672 goals (FC Barcelona)</p>
    </div>

    <div className="flex items-start gap-3">
      <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
      <p className="text-lg">Most La Liga goals: 474 goals</p>
    </div>

    <div className="flex items-start gap-3">
      <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
      <p className="text-lg">Most La Liga assists: 192</p>
    </div>

    <div className="flex items-start gap-3">
      <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
      <p className="text-lg">Most goals in El Clásico: 26 goals</p>
    </div>

    <div className="flex items-start gap-3">
      <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
      <p className="text-lg">Most Ballon d’Or awards: 8 (2009, 2010, 2011, 2012, 2015, 2019, 2021, 2022)</p>
    </div>

    <div className="flex items-start gap-3">
      <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
      <p className="text-lg">Most assists in football history: 407+ assists</p>
    </div>

    <div className="flex items-start gap-3">
      <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
      <p className="text-lg">Only player to score in every round of a World Cup (2022)</p>
    </div>

    <div className="flex items-start gap-3">
      <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
      <p className="text-lg">Most goals in Europe's Top Five Leagues : 496 goals</p>
    </div>

    <div className="flex items-start gap-3">
      <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
      <p className="text-lg">Only player to win Golden Ball twice at the FIFA World Cup (2014, 2022)</p>
    </div>

    <div className="flex items-start gap-3">
  <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
  <p className="text-lg">
    Most IFFHS World’s Best Playmaker awards in history: 5 (2015, 2016, 2017, 2018, 2019)
  </p>
</div>

<div className="flex items-start gap-3">
  <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
  <p className="text-lg">
    Only footballer to win Laureus World Sportsman of the Year twice (2019, 2023)
  </p>
</div>
<div className="flex items-start gap-3">
  <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
  <p className="text-lg">
    Most La Liga Pichichi award in history : 8 times
  </p>
</div>
  </div>
</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

  const TrophiesPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 to-amber-900 text-white">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Trophy className="w-12 h-12" /> Trophy Cabinet
          </h2>
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-center">
              <p className="text-7xl font-bold text-yellow-400 mb-4">48+</p>
              <p className="text-3xl">Total Career Trophies</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
                <h3 className="text-3xl font-bold mb-6 text-yellow-300">Club Trophies</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xl font-bold mb-2">FC Barcelona (35 trophies)</p>
                    <ul className="space-y-2 ml-4">
                      <li>• La Liga: 10 (2004/05, 2005/06, 2008/09, 2009/10, 2010/11, 2012/13, 2014/15, 2015/16, 2017/18, 2018/19)</li>
                      <li>• UEFA Champions League: 4(2005/06, 2008/09, 2010/11, 2015/15)</li>
                      <li>• UEFA Super Cup: 3 (2009, 2011, 2015)</li>
                      <li>• FIFA Club World Cup: 3 (2009, 2011, 2015)</li>
                      <li>• Copa del Rey: 7 (2008/09, 2011/12, 2014/15, 2015/16, 2016/17, 2017/18, 2020/21)</li>
                      <li>• Supercopa de España: 8 (2006, 2009, 2010, 2011, 2013, 2016, 2018, 2020)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-xl font-bold mb-2">Paris Saint-Germain (3 trophies)</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Ligue 1: 2 (2021/22, 2022/23)</li>
                      <li>• French Super Cup: 1 (2022)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-xl font-bold mb-2">Inter Miami CF (4 trophies)</p>
                    <ul className="space-y-2 ml-4">
                      <li>• MLS Cup: 1 (2025)</li>
                      <li>• MLS Eastern Conference: 1 (2025)</li>
                      <li>• Supporters Shield: 1 (2024)</li>
                      <li>• Leagues Cup: 1 (2023)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
                <h3 className="text-3xl font-bold mb-6 text-yellow-300">International Trophies</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xl font-bold mb-2">Argentina National Team</p>
                    <ul className="space-y-2 ml-4">
                      <li>• FIFA World Cup: 1 (2022)</li>
                      <li>• Copa América: 2 (2021, 2024)</li>
                      <li>• Finalissima: 1 (2022)</li>
                      <li>• Olympic Gold Medal: 1 (2008)</li>
                      <li>• FIFA U-20 World Cup: 1 (2005)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-yellow-300">Individual Awards and Honors</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-lg"><strong>Ballon d Or:</strong> 8 (Record)</p>
                  <p className="text-lg"><strong>FIFA The Best Men's Player:</strong> 3</p>
                  <p className="text-lg"><strong>European Golden Shoe:</strong> 6 (Record)</p>
                  <p className="text-lg"><strong>Champions League Top Scorer:</strong> 6</p>
                  <p className="text-lg"><strong>UEFA Men's Best Player:</strong> 2</p>
                  <p className="text-lg"><strong>Laureus World Sportsman of the year:</strong> 2 (Record)</p>
                  <p className="text-lg"><strong>World Cup Golden Ball:</strong> 2 (Record)</p>
                </div>
                <div className="space-y-3">
                  <p className="text-lg"><strong>Copa América Best Player:</strong> 3</p>
                  <p className="text-lg"><strong>IFFHS World's Best Playmaker:</strong> 5 (Record)</p>
                  <p className="text-lg"><strong>MLS MVP:</strong> 2</p>
                  <p className="text-lg"><strong>La Liga Best Player:</strong> 7</p>
                  <p className="text-lg"><strong>La Liga Top Scorer (Pichichi):</strong> 8 (Record)</p>
                  <p className="text-lg"><strong>FIFA FIFPro World XI:</strong> 17</p>
                  <p className="text-lg"><strong>UEFA Team of the year:</strong> 12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

  const MomentsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Star className="w-12 h-12" /> Best Moments
          </h2>
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-purple-300">2022 FIFA World Cup Final</h3>
              <p className="text-sm text-purple-200 mb-4">December 18, 2022 | Lusail Stadium, Qatar</p>
              <p className="leading-relaxed">
                The culmination of Messi's career - leading Argentina to World Cup glory. Messi scored twice in a thrilling 3-3 draw before Argentina won 4-2 on penalties.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-purple-300">Champions League Final 2011</h3>
              <p className="text-sm text-purple-200 mb-4">May 28, 2011 | Wembley Stadium</p>
              <p className="leading-relaxed">
                Barcelona's greatest performance. Messi scored a magnificent goal as Barcelona dismantled Manchester United 3-1.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-purple-300">The Maradona Goal</h3>
              <p className="text-sm text-purple-200 mb-4">April 18, 2007 | Copa del Rey</p>
              <p className="leading-relaxed">
                Messi replicated Maradona's famous goal, dribbling from his own half past six Getafe players.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-purple-300">91 Goals in 2012</h3>
              <p className="leading-relaxed">
                Messi shattered Gerd Müller's 40-year-old record by scoring 91 goals in a calendar year.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

  const GalleryPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 to-pink-900 text-white">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Image className="w-12 h-12" /> Gallery
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-xl">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/worldcup.jpg" 
                    alt="World Cup Glory"
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">World Cup Glory 2022</h3>
                  <p className="text-sm">Lifting the FIFA World Cup trophy</p>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-xl">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/debut.jpg" 
                    alt="Barcelona Legend"
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Barcelona Legend</h3>
                  <p className="text-sm">17 years at Camp Nou</p>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-xl">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/captain.jpg" 
                    alt="Argentina Captain"
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Argentina Captain</h3>
                  <p className="text-sm">Leading his nation</p>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-xl">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/ballon.jpg" 
                    alt="Ballon d'Or"
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">8x Ballon d Or</h3>
                  <p className="text-sm">Most awards in history</p>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-xl">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="family2.jpg" 
                    alt="Family Man"
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Family Man</h3>
                  <p className="text-sm">With Antonela and sons</p>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-xl">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/championsleague.jpg" 
                    alt="Champions League"
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">4x Champions League</h3>
                  <p className="text-sm">European glory</p>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-xl">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/copa.jpg" 
                    alt="Copa America"
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Copa América Champion</h3>
                  <p className="text-sm">2021 & 2024 winner</p>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-xl">
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-xl">
  <div className="h-64 overflow-hidden">
    <img 
      src="/2008-09.jpg" 
      alt="Barcelona Sextuple 2009"
      className="w-full h-full object-cover hover:scale-110 transition-transform"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2">Sextuple 2009</h3>
    <p className="text-sm">
      Messi helped Barcelona win 6 trophies in one year: La Liga, Copa del Rey, Champions League, Spanish Super Cup, UEFA Super Cup & FIFA Club World Cup
    </p>
  </div>
</div>
  </div>
  <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-xl">
    <div className="h-64 overflow-hidden">
      <img
        src="/olympic.jpg"
        alt="Olympic Gold Medal"
        className="w-full h-full object-cover hover:scale-110 transition-transform"
      />
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">Olympic Gold Medal 2008</h3>
      <p className="text-sm">Beijing Olympics champion with Argentina</p>
    </div>
  </div>
  <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-xl">
    <div className="h-64 overflow-hidden">
      <img
        src="/psg.jpg"
        alt="PSG Debut"
        className="w-full h-full object-cover hover:scale-110 transition-transform"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">PSG Debut 2021</h3>
      <p className="text-sm">Starting a new chapter in Paris</p>
    </div>
  </div>
  <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-xl">
    <div className="h-64 overflow-hidden">
      <img
        src="/miami.jpg"
        alt="Inter Miami Debut"
        className="w-full h-full object-cover hover:scale-110 transition-transform"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">Inter Miami Debut 2023</h3>
      <p className="text-sm">Making a huge impact in MLS</p>
    </div>
  </div>
  <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-xl">
    <div className="h-64 overflow-hidden">
      <img
        src="/treble.jpg"
        alt="UEFA Treble"
        className="w-full h-full object-cover hover:scale-110 transition-transform"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">Treble Winner 2008–09</h3>
      <p className="text-sm">La Liga, Copa del Rey & Champions League</p>
    </div>
  </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-black bg-opacity-90 backdrop-blur-lg sticky top-0 z-50 border-b border-white border-opacity-10 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-3 group"
            >
              <div className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              LIONEL MESSI
              </div>
            </button>
            
            <div className="hidden lg:flex gap-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-white hover:bg-opacity-10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}
            </div>

            <button
              className="lg:hidden text-white bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-95 z-40 pt-24 overflow-y-auto">
          <div className="flex flex-col items-center gap-4 p-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl w-full max-w-xs transition-all transform hover:scale-105 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                      : 'text-gray-300 bg-white bg-opacity-10 hover:bg-opacity-20'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="font-bold text-lg">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {currentPage === 'home' && <HomePage />}
      {currentPage === 'bio' && <BiographyPage />}
      {currentPage === 'family' && <FamilyPage />}
      {currentPage === 'clubs' && <ClubsPage />}
      {currentPage === 'goals' && <GoalsPage />}
      {currentPage === 'trophies' && <TrophiesPage />}
      {currentPage === 'moments' && <MomentsPage />}
      {currentPage === 'gallery' && <GalleryPage />}
    </div>
  );
};

export default MessiWebsite;