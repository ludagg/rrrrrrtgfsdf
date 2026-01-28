# CamBus - Application de Réservation de Billets de Bus

## 🚌 À propos

CamBus est une application web moderne de réservation de billets de bus, inspirée de FlixBus. L'application offre une expérience utilisateur fluide et intuitive pour réserver des trajets en bus à travers l'Europe.

## ✨ Fonctionnalités

### Pages principales
- **Accueil** (`index.html`) - Page d'accueil avec recherche de trajets et destinations populaires
- **Résultats de recherche** (`search-results.html`) - Affichage des trajets disponibles avec filtres
- **Destinations** (`destinations.html`) - Exploration des destinations par pays
- **Services à bord** (`services.html`) - Présentation des services et équipements
- **À propos** (`about.html`) - Histoire et valeurs de l'entreprise
- **Centre d'aide** (`help.html`) - FAQ et support client
- **Mes réservations** (`my-bookings.html`) - Gestion des réservations
- **Mon compte** (`account.html`) - Paramètres du compte utilisateur
- **Réservation** (`booking.html`) - Processus de réservation en 3 étapes

### Caractéristiques principales

#### 🎨 Design moderne et professionnel
- Interface utilisateur élégante inspirée de FlixBus
- Palette de couleurs verte (#00AB55) représentant l'écologie
- Design responsive adapté à tous les écrans
- Animations et transitions fluides

#### 🔍 Recherche et filtrage
- Recherche de trajets par ville et date
- Filtres avancés (prix, horaires, équipements)
- Tri des résultats
- Affichage en temps réel des places disponibles

#### 💳 Réservation complète
- Processus de réservation en 3 étapes
- Informations des passagers
- Options supplémentaires (siège premium, bagages, etc.)
- Paiement sécurisé multi-méthodes

#### 👤 Gestion de compte
- Profil utilisateur personnalisable
- Gestion des préférences
- Moyens de paiement enregistrés
- Paramètres de sécurité

#### 📱 Services
- WiFi gratuit
- Prises électriques
- Sièges confortables
- Climatisation
- Toilettes à bord
- Bagages inclus

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styling moderne avec variables CSS
- **JavaScript** - Interactions et fonctionnalités dynamiques
- **Font Awesome** - Icônes
- **Google Fonts (Inter)** - Typographie

## 📁 Structure du projet

```
cambus/
├── index.html              # Page d'accueil
├── search-results.html     # Résultats de recherche
├── destinations.html       # Page des destinations
├── services.html          # Services à bord
├── about.html             # À propos
├── help.html              # Centre d'aide
├── my-bookings.html       # Mes réservations
├── account.html           # Mon compte
├── booking.html           # Page de réservation
├── css/
│   ├── style.css          # Styles globaux
│   ├── search-results.css # Styles page recherche
│   ├── destinations.css   # Styles destinations
│   ├── services.css       # Styles services
│   ├── about.css          # Styles à propos
│   ├── help.css           # Styles aide
│   ├── my-bookings.css    # Styles réservations
│   ├── account.css        # Styles compte
│   └── booking.css        # Styles réservation
├── js/
│   ├── main.js            # JavaScript principal
│   ├── search-results.js  # JS page recherche
│   ├── destinations.js    # JS destinations
│   ├── help.js            # JS aide
│   ├── my-bookings.js     # JS réservations
│   ├── account.js         # JS compte
│   └── booking.js         # JS réservation
└── README.md              # Documentation
```

## 🚀 Installation et utilisation

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd cambus
   ```

2. **Ouvrir dans un navigateur**
   - Ouvrir `index.html` directement dans votre navigateur
   - Ou utiliser un serveur local comme Live Server (VS Code)

3. **Aucune dépendance à installer**
   - Le projet utilise des CDN pour les bibliothèques externes

## 🎯 Fonctionnalités clés

### Navigation
- Menu de navigation sticky
- Liens rapides vers toutes les sections
- Menu responsive pour mobile

### Recherche de trajets
- Sélection de villes de départ/arrivée
- Choix des dates (aller et retour optionnel)
- Nombre de passagers
- Validation des formulaires

### Filtrage des résultats
- Par plage de prix
- Par horaires (matin, après-midi, soir)
- Par équipements disponibles
- Trajets directs uniquement

### Réservation
- Étape 1 : Informations des passagers
- Étape 2 : Options supplémentaires
- Étape 3 : Paiement sécurisé
- Récapitulatif en temps réel

### Compte utilisateur
- Gestion du profil
- Préférences (langue, devise, notifications)
- Moyens de paiement
- Sécurité et confidentialité

## 🎨 Palette de couleurs

- **Primaire** : `#00AB55` (Vert)
- **Primaire foncé** : `#008F48`
- **Primaire clair** : `#E8F7F1`
- **Secondaire** : `#FF6B35` (Orange)
- **Texte foncé** : `#1A1A1A`
- **Texte gris** : `#666666`
- **Arrière-plan** : `#F8F9FA`

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints pour :
- **Desktop** : > 1024px
- **Tablette** : 768px - 1024px
- **Mobile** : < 768px

## 🌟 Points forts du design

1. **Interface moderne** - Design clean et professionnel
2. **UX optimisée** - Navigation intuitive et fluide
3. **Accessibilité** - Structure sémantique et contrastes adaptés
4. **Performance** - Code optimisé et images responsives
5. **Cohérence** - Design system unifié sur toutes les pages

## 🔐 Sécurité

- Validation côté client des formulaires
- Messages d'alerte pour les actions importantes
- Confirmation pour les suppressions
- Paiement sécurisé (simulation)

## 📧 Contact et support

- **Email** : support@cambus.fr
- **Téléphone** : +33 1 23 45 67 89
- **Chat en direct** : Disponible 24/7

## 📄 Licence

© 2024 CamBus. Tous droits réservés.

## 🙏 Crédits

- Design inspiré de FlixBus
- Icônes par Font Awesome
- Typographie : Inter (Google Fonts)
- Images : Unsplash

---

**Développé avec ❤️ pour une meilleure expérience de voyage en bus**
