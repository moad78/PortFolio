-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 21 nov. 2025 à 08:46
-- Version du serveur : 8.0.44
-- Version de PHP : 8.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `agence_loc_2`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id_categorie` int NOT NULL,
  `nom_categorie` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id_categorie`, `nom_categorie`, `description`) VALUES
(1, 'Citadine', 'Voitures compactes adaptées aux trajets urbains'),
(2, 'SUV', 'Véhicules robustes et spacieux'),
(3, 'Berline', 'Voitures confortables pour longs trajets'),
(4, 'Utilitaire', 'Véhicules conçus pour le transport de marchandises'),
(5, 'Cabriolet', 'Voitures décapotables pour conduite loisir'),
(6, '4x4', 'Véhicules tout-terrain'),
(7, 'Break', 'Voitures familiales spacieuses'),
(8, 'Sport', 'Voitures puissantes et rapides'),
(9, 'Électrique', 'Véhicules 100% électriques');

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE `clients` (
  `id_client` int NOT NULL,
  `nom` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `telephone` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `adresse` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id_client`, `nom`, `prenom`, `telephone`, `email`, `adresse`) VALUES
(1, 'Dupont', 'Marie', '0601020304', 'marie.dupont@example.com', 'Paris'),
(2, 'Martin', 'Lucas', '0678493021', 'lucas.martin@example.com', '45 avenue de Lyon, Lyon'),
(3, 'Bernard', 'Sophie', '0612233445', 'sophie.bernard@example.com', '78 rue Nationale, Lille'),
(5, 'Lefevre', 'Claire', '0611458799', 'claire.lefevre@example.com', '50 rue du Centre, Toulouse'),
(6, 'Roux', 'Antoine', '0677889911', 'antoine.roux@example.com', '8 impasse Soleil, Bordeaux'),
(7, 'Fontaine', 'Laura', '0644221133', 'laura.fontaine@example.com', '21 allée Verte, Nantes'),
(8, 'Garnier', 'Thomas', '0622334455', 'thomas.garnier@example.com', '3 rue du Port, Nice'),
(9, 'Chevalier', 'Emma', '0655443322', 'emma.chevalier@example.com', '17 avenue Sud, Strasbourg');

-- --------------------------------------------------------

--
-- Structure de la table `employes`
--

CREATE TABLE `employes` (
  `id_employe` int NOT NULL,
  `nom` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `poste` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `salaire` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `employes`
--

INSERT INTO `employes` (`id_employe`, `nom`, `prenom`, `poste`, `salaire`) VALUES
(1, 'Durand', 'Paul', 'Agent de location', 1750),
(2, 'Leroy', 'Camille', 'Responsable agence', 2450),
(3, 'Moreau', 'Julien', 'Commercial', 1950),
(4, 'Fabre', 'Anais', 'Gestionnaire flotte', 2100),
(5, 'Girard', 'Nina', 'Agent de location', 1800),
(6, 'Benoit', 'Marc', 'Commercial', 2000),
(7, 'Baron', 'Elise', 'Responsable parc auto', 2400),
(8, 'Renaud', 'Pascal', 'Agent de nettoyage', 1600),
(9, 'Lambert', 'Julie', 'Assistante administrative', 1850);

-- --------------------------------------------------------

--
-- Structure de la table `locations`
--

CREATE TABLE `locations` (
  `id_location` int NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `montant_total` float NOT NULL,
  `id_client` int NOT NULL,
  `id_voiture` int NOT NULL,
  `id_employe` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `locations`
--

INSERT INTO `locations` (`id_location`, `date_debut`, `date_fin`, `montant_total`, `id_client`, `id_voiture`, `id_employe`) VALUES
(1, '2025-01-10', '2025-01-12', 39.99, 1, 1, 1),
(2, '2025-02-05', '2025-02-08', 59.99, 2, 2, 2),
(5, '2025-04-10', '2025-04-12', 120, 5, 5, 5),
(6, '2025-05-01', '2025-05-03', 179.98, 6, 6, 6),
(7, '2025-05-15', '2025-05-16', 55.99, 7, 7, 7),
(8, '2025-06-02', '2025-06-05', 299.97, 8, 8, 8),
(9, '2025-06-10', '2025-06-13', 149.97, 9, 9, 9);

-- --------------------------------------------------------

--
-- Structure de la table `voitures`
--

CREATE TABLE `voitures` (
  `id_voiture` int NOT NULL,
  `immatriculation` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `marque` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `modele` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `annee` int NOT NULL,
  `prix_jour` float NOT NULL,
  `id_categorie` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `voitures`
--

INSERT INTO `voitures` (`id_voiture`, `immatriculation`, `marque`, `modele`, `annee`, `prix_jour`, `id_categorie`) VALUES
(1, 'AB-123-CD', 'Peugeot', '208', 2020, 39.99, 1),
(2, 'EF-456-GH', 'Renault', 'Captur', 2021, 59.99, 2),
(4, 'MN-321-OP', 'Renault', 'Kangoo', 2022, 49.99, 4),
(5, 'QR-654-ST', 'Audi', 'A3', 2022, 69.99, 3),
(6, 'UV-432-WX', 'Tesla', 'Model 3', 2023, 89.99, 9),
(7, 'YZ-876-AB', 'Ford', 'Kuga', 2021, 55.99, 6),
(8, 'CD-543-EF', 'Mercedes', 'Classe C', 2020, 99.99, 8),
(9, 'GH-210-IJ', 'Volkswagen', 'Golf SW', 2022, 49.99, 7);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_categorie`);

--
-- Index pour la table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id_client`);

--
-- Index pour la table `employes`
--
ALTER TABLE `employes`
  ADD PRIMARY KEY (`id_employe`);

--
-- Index pour la table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id_location`),
  ADD KEY `FOREIGN` (`id_employe`,`id_client`,`id_voiture`),
  ADD KEY `id_client` (`id_client`),
  ADD KEY `id_voiture` (`id_voiture`);

--
-- Index pour la table `voitures`
--
ALTER TABLE `voitures`
  ADD PRIMARY KEY (`id_voiture`),
  ADD KEY `FOREIGN` (`id_categorie`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id_client`),
  ADD CONSTRAINT `locations_ibfk_2` FOREIGN KEY (`id_voiture`) REFERENCES `voitures` (`id_voiture`),
  ADD CONSTRAINT `locations_ibfk_3` FOREIGN KEY (`id_employe`) REFERENCES `employes` (`id_employe`);

--
-- Contraintes pour la table `voitures`
--
ALTER TABLE `voitures`
  ADD CONSTRAINT `voitures_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `categories` (`id_categorie`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
