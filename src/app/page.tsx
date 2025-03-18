// pages/index.tsx
'use client'
import React from 'react';
import { motion } from "motion/react"
import Image from 'next/image'
import { Phone, Calendar, Mail, MapPin, Download } from 'lucide-react';
import Head from 'next/head';
// import myImage from "./images/man-car.jpg"

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <Head>
        <title>TaxiForFait | Service de Taxi à Abonnement</title>
        <meta name="description" content="TaxiForFait - Service de taxi avec options d'abonnement journalier, hebdomadaire ou mensuel. Disponible sur App Store et Play Store." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-green-600 text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold">TaxiForFait</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#comment-ca-marche" className="hover:text-green-200">Comment ça marche</a>
            <a href="#abonnements" className="hover:text-green-200">Abonnements</a>
            <a href="#telecharger" className="hover:text-green-200">Télécharger</a>
            <a href="#contact" className="hover:text-green-200">Contact</a>
          </nav>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-500 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Votre taxi, à votre façon</h1>
              <p className="text-lg mb-6">Abonnez-vous et déplacez-vous librement. Payez en espèces ou profitez d`un forfait adapté à vos besoins.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#telecharger" className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition">Télécharger l`app</a>
                <a href="#abonnements" className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition">Nos forfaits</a>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
                    {/* <h1>My Image Component</h1> */}
                    <Image   src="/man-car.jpg"    width={500} className="rounded-lg shadow-xl h-full w-full" 
        height={500} alt="TaxiForFait App Interface" />
              {/* <img src={mancar} alt="TaxiForFait App Interface" className="rounded-lg shadow-xl" /> */}
            </motion.div>
          </div>
        </section>

        {/* How it works */}
        <section id="comment-ca-marche" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-green-600 mb-2">Comment ça marche</h2>
              <p className="text-lg text-gray-600">Simple, rapide et efficace</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Pour les passagers</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Créez votre compte en quelques étapes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Commandez un taxi à n`importe quel moment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Payez en espèces ou optez pour un abonnement avantageux</span>
                  </li>
                </ul>
                <Image src="/african-car.jpg" height={400} width={500} alt="Rider App Interface" className="rounded-lg w-full" />
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Pour les chauffeurs</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Inscrivez-vous et complétez votre profil</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Recevez des demandes de courses en temps réel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Gérez votre planning selon vos disponibilités</span>
                  </li>
                </ul>
                <Image src="/30189.jpg" height={400} width={500} alt="Driver App Interface" className="rounded-lg w-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Subscription Plans */}
        <section id="abonnements" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-green-600 mb-2">Nos Forfaits</h2>
              <p className="text-lg text-gray-600">Choisissez l`option qui vous convient le mieux</p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { duration: '1 Jour', icon: <Calendar size={20} />, price: '2 000 FCFA', features: ['Courses illimitées', 'Annulations gratuites', 'Support prioritaire'] },
                { duration: '2 Jours', icon: <Calendar size={20} />, price: '3 500 FCFA', features: ['Courses illimitées', 'Annulations gratuites', 'Support prioritaire'] },
                { duration: '1 Semaine', icon: <Calendar size={20} />, price: '10 000 FCFA', features: ['Courses illimitées', 'Annulations gratuites', 'Support prioritaire', 'Réduction heures de pointe'] },
                { duration: '1 Mois', icon: <Calendar size={20} />, price: '35 000 FCFA', features: ['Courses illimitées', 'Annulations gratuites', 'Support VIP', 'Réduction heures de pointe', 'Chauffeurs premium'] }
              ].map((plan, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white border border-green-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-600 text-white p-4 text-center">
                    <div className="flex justify-center items-center mb-2">
                      {plan.icon}
                      <span className="ml-2 font-bold">{plan.duration}</span>
                    </div>
                    <div className="text-2xl font-bold">{plan.price}</div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-6 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">Choisir ce forfait</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Download the app */}
        <section id="telecharger" className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Téléchargez l`application</h2>
                <p className="text-lg mb-6">Disponible sur App Store et Google Play Store. Commencez dès aujourd`hui à profiter de nos services de taxi à forfait!</p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                    <Download size={20} className="mr-2" />
                    <div>
                      <div className="text-xs">Télécharger sur</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </a>
                  <a href="#" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                    <Download size={20} className="mr-2" />
                    <div>
                      <div className="text-xs">Télécharger sur</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* <Image src="/splash.png"  objectFit='fit' width={150} height={500} alt="Mobile App" className="max-h-96" /> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-green-600 mb-2">Contactez-nous</h2>
              <p className="text-lg text-gray-600">Nous sommes à votre écoute</p>
            </motion.div>
            
            <div className="flex flex-col md:flex-row gap-12">
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                   <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                    <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"></textarea>
                  </div>
                  <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">Envoyer</button>
                </form>
              </motion.div>
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full text-green-600 mr-4">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Adresse</p>
                        <p className="text-gray-600">Congo, Brazzaville 7RUE BAYAS - POTO POTO
                        CONGO, BRAZZAViLLE</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full text-green-600 mr-4">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Téléphone</p>
                        <p className="text-gray-600">+242 06 78 15 6 99</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full text-green-600 mr-4">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">contact@taxiforfait.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Suivez-nous</h4>
                    <div className="flex space-x-4">
                      {['facebook', 'twitter', 'instagram'].map(social => (
                        <a key={social} href="#" className="bg-green-100 p-2 rounded-full text-green-600 hover:bg-green-200 transition">
                          <svg width="20" height="20" fill="currentColor">
                            <rect width="20" height="20" fill="none" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">TaxiForFait</div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="hover:text-green-200">Conditions d`utilisation</a>
              <a href="#" className="hover:text-green-200">Politique de confidentialité</a>
              <a href="#" className="hover:text-green-200">FAQ</a>
              <a href="#" className="hover:text-green-200">Carrières</a>
            </div>
          </div>
          <div className="mt-6 text-center text-green-200">
            © {new Date().getFullYear()} TaxiForFait. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}