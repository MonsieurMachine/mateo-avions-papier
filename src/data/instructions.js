const instructions = {
  // ============================================================
  // 1. DART - La Flèche (5 plis)
  // ============================================================
  "dart": [
    { step: 1, text: "Pose ta feuille A4 devant toi en mode portrait (le côté long vers toi).", icon: "📄", tip: "Utilise une feuille bien plate, sans plis ni froissements." },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur : amène le bord gauche sur le bord droit.", icon: "↔️", tip: "Aligne bien les bords avant d'appuyer. Ce pli central est la base de tout !" },
    { step: 3, text: "Déplie la feuille. Tu vois la ligne du milieu ? Rabats le coin supérieur gauche vers cette ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Fais pareil avec le coin supérieur droit : rabats-le vers la ligne centrale.", icon: "↗️", tip: "Les deux triangles doivent se toucher au milieu sans se chevaucher." },
    { step: 5, text: "Replie l'avion en deux le long de la ligne centrale, les triangles à l'intérieur.", icon: "↔️", tip: null },
    { step: 6, text: "Rabats l'aile du dessus vers le bas : le bord supérieur doit arriver au bord inférieur (la pliure du ventre).", icon: "↗️", tip: "Laisse environ 1 cm de fuselage en bas pour pouvoir tenir l'avion." },
    { step: 7, text: "Retourne l'avion et rabats la deuxième aile de la même façon.", icon: "🔄", tip: "Les deux ailes doivent être parfaitement symétriques." },
    { step: 8, text: "Déplie les ailes pour qu'elles forment un léger V. Ton avion est prêt !", icon: "🎯", tip: "Lance-le fort et droit devant toi pour un vol rapide comme une flèche !" },
  ],

  // ============================================================
  // 2. BULLDOG - Le Bouledogue (6 plis)
  // ============================================================
  "bulldog": [
    { step: 1, text: "Pose ta feuille A4 devant toi en mode portrait.", icon: "📄", tip: null },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie pour marquer la ligne centrale.", icon: "↔️", tip: "Appuie bien fort avec ton ongle pour que la marque soit bien visible." },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: "Tu obtiens une pointe en haut, comme un toit de maison." },
    { step: 5, text: "Maintenant, rabats cette pointe vers le bas, à environ 5-6 cm du bord supérieur. Le bout de la pointe doit arriver un peu au-dessus du milieu de la feuille.", icon: "📐", tip: "C'est ce pli qui crée le nez plat du Bouledogue et lui donne son poids." },
    { step: 6, text: "Rabats le nouveau coin supérieur gauche vers la ligne centrale, par-dessus le triangle replié.", icon: "↗️", tip: null },
    { step: 7, text: "Rabats le nouveau coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: "La pointe repliée en dessous doit dépasser un peu : c'est elle qui verrouille les plis." },
    { step: 8, text: "Replie le petit triangle qui dépasse vers le haut pour bloquer les deux rabats. C'est le verrou !", icon: "🔒", tip: "Ce verrou empêche l'avion de s'ouvrir en vol." },
    { step: 9, text: "Retourne la feuille et plie l'avion en deux le long de la ligne centrale.", icon: "🔄", tip: null },
    { step: 10, text: "Rabats chaque aile vers le bas pour former les ailes. Déplie-les en léger V.", icon: "🎯", tip: "Lance-le doucement ! Le Bouledogue vole mieux avec un lancer en douceur." },
  ],

  // ============================================================
  // 3. STABLE - Le Planeur Stable (7 plis)
  // ============================================================
  "stable": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait devant toi.", icon: "📄", tip: null },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie pour voir la ligne centrale.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats encore une fois le bord gauche incliné vers la ligne centrale. La pointe s'allonge.", icon: "↗️", tip: "Chaque pli supplémentaire rend le nez plus étroit et plus lourd." },
    { step: 6, text: "Rabats le bord droit incliné vers la ligne centrale de la même manière.", icon: "↗️", tip: null },
    { step: 7, text: "Replie l'avion en deux le long de la ligne centrale, les plis à l'intérieur.", icon: "↔️", tip: null },
    { step: 8, text: "Forme les ailes en rabattant le bord supérieur vers le bord inférieur de chaque côté.", icon: "↗️", tip: null },
    { step: 9, text: "Déplie les ailes en léger V. Avec des ciseaux, fais deux petites entailles à l'arrière des ailes pour créer des volets.", icon: "🎯", tip: "Plie les volets légèrement vers le haut pour que l'avion plane plus longtemps. Vers le bas, il plongera. Un volet en haut et un en bas : il tournera !" },
  ],

  // ============================================================
  // 4. TAIL-SPIN - La Vrille (9 plis)
  // ============================================================
  "tail-spin": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: null },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats encore le bord incliné gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 6, text: "Rabats encore le bord incliné droit vers la ligne centrale.", icon: "↗️", tip: "Le nez doit être bien pointu et symétrique." },
    { step: 7, text: "Replie l'avion en deux le long de la ligne centrale.", icon: "↔️", tip: null },
    { step: 8, text: "Forme les ailes en rabattant chaque côté vers le bas.", icon: "↗️", tip: null },
    { step: 9, text: "Déplie les ailes. À l'arrière de chaque aile, plie un petit volet d'environ 1 cm.", icon: "📐", tip: null },
    { step: 10, text: "Voici le secret : plie le volet gauche vers le HAUT et le volet droit vers le BAS (ou l'inverse).", icon: "🎯", tip: "Les volets dans des directions opposées font tourner l'avion sur lui-même en vol ! Change les directions pour inverser le sens de rotation." },
    { step: 11, text: "Appuie bien sur tous les plis. Lance l'avion droit devant toi et regarde-le vriller !", icon: "✋", tip: "Lance avec un mouvement bien droit, pas trop fort. La vrille se fera toute seule !" },
  ],

  // ============================================================
  // 5. HARRIER - Le Harrier (7 plis)
  // ============================================================
  "harrier": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: null },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie pour marquer le centre.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats la pointe du haut vers le bas, à environ 2 cm au-dessus du milieu de la feuille.", icon: "📐", tip: "Ce pli donne du poids au nez et stabilise le vol." },
    { step: 6, text: "Rabats les deux nouveaux coins supérieurs vers la ligne centrale. Un petit triangle de la pointe repliée doit dépasser en bas.", icon: "↗️", tip: null },
    { step: 7, text: "Replie ce petit triangle vers le haut pour verrouiller les rabats.", icon: "🔒", tip: "Ce verrou est très important pour que l'avion garde sa forme." },
    { step: 8, text: "Retourne la feuille et plie l'avion en deux le long de la ligne centrale.", icon: "🔄", tip: null },
    { step: 9, text: "Forme les ailes en rabattant chaque côté. Déplie-les en position de vol (léger V).", icon: "🎯", tip: "Le Harrier vole très droit. Lance-le avec force pour des vols longue distance !" },
  ],

  // ============================================================
  // 6. SEA-GLIDER - Le Planeur des Mers (8 plis)
  // ============================================================
  "sea-glider": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: null },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats la pointe vers le bas jusqu'au milieu de la feuille.", icon: "📐", tip: null },
    { step: 6, text: "Rabats les deux nouveaux coins supérieurs vers la ligne centrale, en laissant un petit espace de 1 cm entre les bords et le centre.", icon: "↗️", tip: "Cet espace donne aux ailes leur forme large de mouette." },
    { step: 7, text: "Replie la pointe qui dépasse en dessous pour verrouiller.", icon: "🔒", tip: null },
    { step: 8, text: "Retourne et plie l'avion en deux.", icon: "🔄", tip: null },
    { step: 9, text: "Forme les ailes en les rabattant. Les ailes doivent être larges — laisse seulement 1 cm de fuselage en bas.", icon: "↗️", tip: null },
    { step: 10, text: "Déplie les ailes et relève légèrement le bout de chaque aile vers le haut (environ 1 cm).", icon: "🎯", tip: "Ces petits bouts relevés sont les winglets. Ils aident l'avion à planer comme une mouette ! Lance-le doucement, légèrement vers le haut." },
  ],

  // ============================================================
  // 7. NAKAMURA-LOCK - Le Verrou de Nakamura (10 plis)
  // ============================================================
  "nakamura-lock": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: null },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: "Ce pli central doit être très précis car tout l'avion s'aligne dessus." },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats la pointe vers le bas pour qu'elle atteigne le bas des triangles pliés.", icon: "📐", tip: null },
    { step: 6, text: "Rabats le coin supérieur gauche vers la ligne centrale (nouveau pli diagonal).", icon: "↗️", tip: null },
    { step: 7, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 8, text: "Tu vois la petite pointe triangulaire qui dépasse en dessous ? Replie-la vers le HAUT par-dessus les deux rabats.", icon: "🔒", tip: "C'est le fameux verrou de Nakamura ! Il bloque les plis pour qu'ils ne bougent plus jamais." },
    { step: 9, text: "Retourne la feuille et plie l'avion en deux le long de la ligne centrale.", icon: "🔄", tip: null },
    { step: 10, text: "Rabats l'aile du dessus vers le bas en alignant le bord supérieur avec le bas du fuselage.", icon: "↗️", tip: null },
    { step: 11, text: "Retourne et fais pareil avec l'autre aile.", icon: "🔄", tip: null },
    { step: 12, text: "Déplie les ailes en léger V. Ton avion est verrouillé et prêt à voler droit comme une flèche !", icon: "🎯", tip: "Grâce au verrou, cet avion garde sa forme même après de nombreux lancers. Lance-le avec force !" },
  ],

  // ============================================================
  // 8. STEALTH-GLIDER - Le Planeur Furtif (10 plis)
  // ============================================================
  "stealth-glider": [
    { step: 1, text: "Pose ta feuille A4 en mode paysage (le côté long en haut).", icon: "📄", tip: "Attention : pour cet avion, la feuille est en paysage, pas en portrait !" },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur (le bord du bas monte vers le bord du haut), puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale horizontale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin inférieur gauche vers la ligne centrale horizontale.", icon: "↗️", tip: "Tu as maintenant une pointe à gauche." },
    { step: 5, text: "Plie la pointe gauche vers la droite, à environ un tiers de la longueur totale.", icon: "📐", tip: null },
    { step: 6, text: "Rabats le nouveau coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 7, text: "Rabats le nouveau coin inférieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 8, text: "Retourne l'avion et replie-le en deux le long de la ligne centrale.", icon: "🔄", tip: null },
    { step: 9, text: "Forme les ailes très larges en rabattant chaque côté presque à plat, en laissant juste un mince fuselage.", icon: "↗️", tip: null },
    { step: 10, text: "Déplie les ailes pour qu'elles soient presque horizontales, avec un tout petit angle en V.", icon: "📐", tip: null },
    { step: 11, text: "Plie de petits winglets vers le haut au bout de chaque aile (environ 2 cm).", icon: "📐", tip: null },
    { step: 12, text: "Ton Planeur Furtif est prêt ! Ses ailes larges lui permettent de flotter très longtemps.", icon: "🎯", tip: "Lance-le très doucement, presque en le lâchant. Il planera lentement et silencieusement comme un espion !" },
  ],

  // ============================================================
  // 9. SPRINTER - Le Sprinter (7 plis)
  // ============================================================
  "sprinter": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: null },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats encore le bord incliné gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 6, text: "Rabats encore le bord incliné droit vers la ligne centrale.", icon: "↗️", tip: "Le nez est maintenant bien fin et pointu." },
    { step: 7, text: "Replie l'avion en deux le long de la ligne centrale.", icon: "↔️", tip: null },
    { step: 8, text: "Forme les ailes en rabattant chaque côté vers le bas.", icon: "↗️", tip: null },
    { step: 9, text: "Sur la partie arrière de l'avion, découpe et plie vers le haut un aileron vertical d'environ 2 cm de haut.", icon: "📐", tip: "L'aileron à l'arrière agit comme un gouvernail. Il garde l'avion bien droit à grande vitesse !" },
    { step: 10, text: "Déplie les ailes en léger V. Le Sprinter est prêt à foncer !", icon: "🎯", tip: "Lance-le fort et droit. C'est un avion rapide et polyvalent !" },
  ],

  // ============================================================
  // 10. EAGLE-EYE - L'Œil d'Aigle (10 plis)
  // ============================================================
  "eagle-eye": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: null },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats la pointe vers le bas, à environ 3 cm du bord supérieur.", icon: "📐", tip: null },
    { step: 6, text: "Rabats les deux nouveaux coins supérieurs vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 7, text: "Replie la petite pointe qui dépasse vers le haut pour verrouiller.", icon: "🔒", tip: null },
    { step: 8, text: "Retourne et plie l'avion en deux le long de la ligne centrale.", icon: "🔄", tip: null },
    { step: 9, text: "Forme les ailes très larges. Laisse seulement 1 cm de fuselage.", icon: "↗️", tip: null },
    { step: 10, text: "Déplie les ailes. Avec des ciseaux, découpe des petites encoches en zigzag à l'arrière des ailes pour imiter des plumes.", icon: "✂️", tip: "Les encoches sont décoratives et n'affectent pas beaucoup le vol." },
    { step: 11, text: "Plie le bout du nez légèrement vers le bas pour former un bec d'aigle.", icon: "📐", tip: null },
    { step: 12, text: "Ton Aigle est prêt ! Dessine des yeux sur les côtés du nez si tu veux.", icon: "🎯", tip: "Ajoute un trombone sur le nez si l'avion pique du nez trop vite. Ça l'aidera à voler plus loin !" },
  ],

  // ============================================================
  // 11. STUNT-PLANE - L'Avion Acrobatique (9 plis)
  // ============================================================
  "stunt-plane": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: null },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats la pointe vers le bas, jusqu'à environ 4 cm du bas de la feuille.", icon: "📐", tip: "Plus tu rabats loin, plus l'avion sera instable et fera des figures folles !" },
    { step: 6, text: "Rabats les deux coins supérieurs vers la ligne centrale, par-dessus le triangle replié.", icon: "↗️", tip: null },
    { step: 7, text: "Replie le petit triangle qui dépasse pour verrouiller.", icon: "🔒", tip: null },
    { step: 8, text: "Retourne et plie en deux le long de la ligne centrale.", icon: "🔄", tip: null },
    { step: 9, text: "Forme les ailes en les rabattant vers le bas. Fais des ailes assez courtes (laisse 2 cm de fuselage).", icon: "↗️", tip: null },
    { step: 10, text: "Déplie les ailes. Plie les bouts des ailes vers le haut à environ 45 degrés.", icon: "📐", tip: null },
    { step: 11, text: "À l'arrière des ailes, fais des petits volets et plie-les dans différentes directions pour créer des figures.", icon: "🎯", tip: "Deux volets vers le haut = boucle. Un en haut, un en bas = vrille. Teste plein de combinaisons !" },
  ],

  // ============================================================
  // 12. HAMMER - Le Marteau (14 plis)
  // ============================================================
  "hammer": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: "Pour cet avion, la précision est très importante. Prends ton temps !" },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats la pointe vers le bas jusqu'au bord inférieur des triangles.", icon: "📐", tip: null },
    { step: 6, text: "Rabats le nouveau coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 7, text: "Rabats le nouveau coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 8, text: "Rabats encore une fois la pointe vers le bas, sur environ 3 cm.", icon: "📐", tip: "Ce deuxième repli crée le nez lourd caractéristique du Marteau." },
    { step: 9, text: "Rabats encore les bords inclinés gauche et droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 10, text: "Rabats une dernière fois la pointe du nez vers le bas sur 2 cm.", icon: "📐", tip: "Le nez est maintenant très lourd avec plein de couches de papier. C'est normal !" },
    { step: 11, text: "Retourne et plie l'avion en deux le long de la ligne centrale.", icon: "🔄", tip: "Appuie très fort, il y a beaucoup d'épaisseurs au niveau du nez." },
    { step: 12, text: "Forme les ailes en rabattant chaque côté vers le bas.", icon: "↗️", tip: null },
    { step: 13, text: "Appuie bien sur tous les plis, surtout au niveau du nez épais.", icon: "✋", tip: null },
    { step: 14, text: "Déplie les ailes en léger V.", icon: "📐", tip: null },
    { step: 15, text: "Le Marteau est prêt ! Son nez lourd le tire vers l'avant comme un boulet de canon.", icon: "🎯", tip: "Lance-le très fort, légèrement vers le haut. C'est le champion de la distance !" },
  ],

  // ============================================================
  // 13. BIRD - L'Oiseau (14 plis)
  // ============================================================
  "bird": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: null },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats la pointe vers le bas, à environ 6 cm du haut.", icon: "📐", tip: null },
    { step: 6, text: "Rabats les deux coins supérieurs vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 7, text: "Replie la petite pointe qui dépasse vers le haut pour verrouiller.", icon: "🔒", tip: null },
    { step: 8, text: "Retourne et plie l'avion en deux.", icon: "🔄", tip: null },
    { step: 9, text: "Dessine au crayon la forme d'une aile d'oiseau sur le dessus : un bord arrondi qui remonte au bout.", icon: "📐", tip: null },
    { step: 10, text: "Avec des ciseaux, découpe le long de ta ligne pour donner une forme d'aile arrondie.", icon: "✂️", tip: "Découpe les deux ailes en même temps pour qu'elles soient parfaitement identiques." },
    { step: 11, text: "Rabats les ailes de chaque côté, en laissant environ 2 cm de fuselage.", icon: "↗️", tip: null },
    { step: 12, text: "À l'arrière, découpe un V dans le bord pour créer une queue fourchue comme un oiseau.", icon: "✂️", tip: null },
    { step: 13, text: "Plie légèrement le bout du nez vers le bas pour former un bec.", icon: "📐", tip: null },
    { step: 14, text: "Au bout des ailes, plie légèrement vers le haut pour imiter les plumes relevées.", icon: "📐", tip: null },
    { step: 15, text: "Déplie les ailes. L'Oiseau est prêt à prendre son envol !", icon: "🎯", tip: "Lance-le en douceur vers le haut comme si tu libérais un vrai oiseau. Il planera très loin !" },
  ],

  // ============================================================
  // 14. SONIC-JET - Le Jet Supersonique (14 plis)
  // ============================================================
  "sonic-jet": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: "Cet avion doit être le plus fin possible. Chaque pli doit être parfait !" },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats encore le bord incliné gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 6, text: "Rabats encore le bord incliné droit vers la ligne centrale.", icon: "↗️", tip: "Le nez est maintenant très fin et pointu." },
    { step: 7, text: "Rabats une troisième fois le bord gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 8, text: "Rabats une troisième fois le bord droit vers la ligne centrale.", icon: "↗️", tip: "Le nez est maintenant extrêmement pointu. C'est ce qui le rend si rapide !" },
    { step: 9, text: "Retourne et plie l'avion en deux le long de la ligne centrale.", icon: "🔄", tip: null },
    { step: 10, text: "Forme les ailes : elles doivent être courtes et en forme de triangle étroit.", icon: "↗️", tip: null },
    { step: 11, text: "Plie un petit aileron vertical à l'arrière de chaque aile (vers le haut, 1 cm).", icon: "📐", tip: null },
    { step: 12, text: "Rabats le bout des ailes légèrement vers le bas pour créer des ailerons.", icon: "📐", tip: null },
    { step: 13, text: "Appuie très fort sur tous les plis du nez pour qu'il soit bien compact.", icon: "✋", tip: null },
    { step: 14, text: "Déplie les ailes en V très léger. Le Jet Supersonique est prêt !", icon: "🎯", tip: "Lance-le le plus fort possible ! Sa forme aérodynamique fendra l'air à toute vitesse !" },
  ],

  // ============================================================
  // 15. CANARD - Le Canard Volant (14 plis)
  // ============================================================
  "canard": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: null },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats encore le bord incliné gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 6, text: "Rabats encore le bord incliné droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 7, text: "Replie l'avion en deux le long de la ligne centrale.", icon: "↔️", tip: null },
    { step: 8, text: "Forme les ailes principales en rabattant chaque côté vers le bas, mais ne va pas jusqu'au bout : laisse environ 4 cm à l'avant sans plier.", icon: "↗️", tip: "La partie avant non pliée va devenir les ailes canard !" },
    { step: 9, text: "À l'avant, rabats la couche supérieure vers l'extérieur pour former une petite aile canard de chaque côté.", icon: "📐", tip: "Les ailes canard sont plus petites que les ailes principales. Elles sortent vers l'avant." },
    { step: 10, text: "Plie la pointe du nez très légèrement vers le bas (environ 5 mm) pour arrondir le bord d'attaque.", icon: "📐", tip: null },
    { step: 11, text: "Ajuste les ailes canard pour qu'elles soient légèrement inclinées vers le haut par rapport aux ailes principales.", icon: "📐", tip: null },
    { step: 12, text: "Au bout des ailes principales, plie de petits winglets vers le haut (1 cm).", icon: "📐", tip: null },
    { step: 13, text: "Appuie bien sur tous les plis.", icon: "✋", tip: null },
    { step: 14, text: "Déplie les ailes principales en léger V. Vérifie que les ailes canard pointent légèrement vers le haut.", icon: "🎯", tip: "Les ailes canard stabilisent l'avion. Si l'avion pique du nez, relève-les un peu plus !" },
  ],

  // ============================================================
  // 16. SUZANNE - La Suzanne (8 plis)
  // ============================================================
  "suzanne": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait. Elle doit être parfaitement plate.", icon: "📄", tip: "La Suzanne détient le record du monde (69 mètres !). Chaque pli doit être ultra précis. Prends ton temps !" },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie. Cette ligne doit être PARFAITEMENT centrée.", icon: "↔️", tip: "Utilise une règle pour vérifier que le pli est exactement au milieu. Le moindre écart change tout !" },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale. Aligne au millimètre près.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale, exactement symétrique au pli précédent.", icon: "↗️", tip: "Vérifie la symétrie en regardant l'avion de face. Les deux côtés doivent être identiques." },
    { step: 5, text: "Rabats encore le bord incliné gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 6, text: "Rabats encore le bord incliné droit vers la ligne centrale.", icon: "↗️", tip: "Appuie très fort sur chaque pli avec une règle ou ton ongle." },
    { step: 7, text: "Replie l'avion en deux le long de la ligne centrale, les plis à l'intérieur.", icon: "↔️", tip: null },
    { step: 8, text: "Forme les ailes en rabattant chaque côté. Le bord de l'aile doit être parfaitement parallèle au bas du fuselage.", icon: "📐", tip: "Les ailes doivent être exactement au même angle des deux côtés." },
    { step: 9, text: "Déplie les ailes pour qu'elles soient presque plates, avec un angle en V très léger (environ 165 degrés).", icon: "📐", tip: null },
    { step: 10, text: "Vérifie ton avion de face : il doit être parfaitement symétrique. Ajuste si nécessaire.", icon: "🎯", tip: "Pour un vol record, lance avec un mouvement puissant à environ 40 degrés vers le haut. L'avion montera haut puis planera très loin !" },
  ],

  // ============================================================
  // 17. BOOMERANG - Le Boomerang (19 plis)
  // ============================================================
  "boomerang": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: "C'est l'avion le plus complexe ! Suis bien chaque étape et sois très précis." },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Plie la feuille en deux dans le sens de la largeur (le bas vers le haut), puis déplie.", icon: "↔️", tip: "Tu as maintenant une croix de plis sur ta feuille." },
    { step: 4, text: "Rabats le coin supérieur gauche vers la ligne centrale verticale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats le coin supérieur droit vers la ligne centrale verticale.", icon: "↗️", tip: null },
    { step: 6, text: "Rabats la pointe vers le bas jusqu'à la ligne centrale horizontale.", icon: "📐", tip: null },
    { step: 7, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 8, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 9, text: "Replie la pointe vers le haut pour verrouiller.", icon: "🔒", tip: null },
    { step: 10, text: "Retourne la feuille.", icon: "🔄", tip: null },
    { step: 11, text: "Plie l'avion en deux le long de la ligne centrale verticale, en amenant le côté gauche sur le côté droit.", icon: "↔️", tip: null },
    { step: 12, text: "Fais pivoter l'avion pour que la pointe soit à gauche et le côté ouvert en haut.", icon: "📄", tip: null },
    { step: 13, text: "Rabats l'aile du dessus vers le bas en faisant un pli diagonal : le coin arrière haut va vers le coin avant bas.", icon: "↗️", tip: "C'est le pli clé qui donne la forme de boomerang !" },
    { step: 14, text: "Retourne l'avion et fais le même pli diagonal de l'autre côté.", icon: "🔄", tip: "Les deux ailes doivent être pliées de manière parfaitement symétrique." },
    { step: 15, text: "Déplie les ailes et ajuste l'angle entre elles pour obtenir un V ouvert (environ 100-120 degrés).", icon: "📐", tip: null },
    { step: 16, text: "Plie le bout de chaque aile vers le haut (environ 2 cm) pour créer des winglets.", icon: "📐", tip: null },
    { step: 17, text: "Plie le bout de chaque aile légèrement vers l'arrière pour donner de la courbure.", icon: "📐", tip: null },
    { step: 18, text: "Vérifie que l'avion vu de face a un V bien ouvert et symétrique.", icon: "✋", tip: null },
    { step: 19, text: "Appuie bien sur tous les plis pour les marquer.", icon: "✋", tip: null },
    { step: 20, text: "Le Boomerang est prêt ! Pour le lancer, tiens-le par un bout d'aile et lance-le en tournant le poignet.", icon: "🎯", tip: "Lance-le verticalement avec une rotation du poignet, incliné à 45 degrés. Il fera un arc et reviendra vers toi !" },
  ],

  // ============================================================
  // 18. FLECHETTE - La Fléchette (4 plis)
  // ============================================================
  "flechette": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: "C'est l'avion le plus simple ! Parfait pour les débutants." },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie pour marquer la ligne centrale.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: "C'est tout pour les plis diagonaux ! Simple, non ?" },
    { step: 5, text: "Replie l'avion en deux le long de la ligne centrale, les triangles à l'intérieur.", icon: "↔️", tip: null },
    { step: 6, text: "Déplie les ailes en tirant chaque côté vers le bas. Les ailes sont grandes et simples.", icon: "🎯", tip: "Lance-la fort et droit ! C'est un petit missile rapide. Avec seulement 4 plis, tu peux en faire plein en quelques minutes !" },
  ],

  // ============================================================
  // 19. SIMPLE-GLIDER - Le Planeur Simple (6 plis)
  // ============================================================
  "simple-glider": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: null },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats la pointe vers le bas, jusqu'à environ 3 cm au-dessus du bas de la feuille.", icon: "📐", tip: "Ce pli donne du poids à l'avant et aide l'avion à planer au lieu de piquer du nez." },
    { step: 6, text: "Retourne la feuille. Plie l'avion en deux le long de la ligne centrale.", icon: "🔄", tip: null },
    { step: 7, text: "Forme les ailes en rabattant chaque côté vers le bas. Les ailes doivent être bien larges.", icon: "↗️", tip: "Laisse seulement 1 cm de fuselage en bas pour des ailes les plus larges possible." },
    { step: 8, text: "Déplie les ailes en léger V. Ton Planeur Simple est prêt !", icon: "🎯", tip: "Lance-le doucement en le poussant vers l'avant. Il va planer longtemps grâce à ses grandes ailes !" },
  ],

  // ============================================================
  // 20. NINJA-STAR - L'Étoile Ninja (11 plis)
  // ============================================================
  "ninja-star": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: "Cet avion a une forme spéciale qui le fait tourner sur lui-même en vol !" },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Plie la feuille en deux dans le sens de la largeur, puis déplie.", icon: "↔️", tip: "Tu as maintenant une croix de plis." },
    { step: 4, text: "Rabats le coin supérieur gauche vers le centre de la feuille (là où les deux plis se croisent).", icon: "↗️", tip: null },
    { step: 5, text: "Rabats le coin supérieur droit vers le centre.", icon: "↗️", tip: null },
    { step: 6, text: "Rabats le coin inférieur gauche vers le centre.", icon: "↗️", tip: null },
    { step: 7, text: "Rabats le coin inférieur droit vers le centre.", icon: "↗️", tip: "Ta feuille est maintenant un carré avec une forme de losange." },
    { step: 8, text: "Retourne la feuille. Rabats le bord supérieur vers la ligne centrale horizontale.", icon: "🔄", tip: null },
    { step: 9, text: "Rabats le bord inférieur vers la ligne centrale horizontale.", icon: "↗️", tip: null },
    { step: 10, text: "Plie l'avion en deux le long de la ligne centrale horizontale.", icon: "↔️", tip: null },
    { step: 11, text: "Rabats les ailes de chaque côté en diagonale pour créer une forme d'étoile.", icon: "↗️", tip: null },
    { step: 12, text: "Relève les bouts des ailes à 90 degrés pour créer les pointes de l'étoile.", icon: "📐", tip: null },
    { step: 13, text: "L'Étoile Ninja est prête ! Tiens-la par le centre et lance-la en rotation.", icon: "🎯", tip: "Lance-la comme un frisbee avec une rotation du poignet. Elle tournera dans l'air comme un shuriken !" },
  ],

  // ============================================================
  // 21. CONCORDE - Le Concorde (9 plis)
  // ============================================================
  "concorde": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: null },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats encore le bord incliné gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 6, text: "Rabats encore le bord incliné droit vers la ligne centrale.", icon: "↗️", tip: "Le nez est maintenant long et fin, comme le vrai Concorde !" },
    { step: 7, text: "Replie l'avion en deux le long de la ligne centrale.", icon: "↔️", tip: null },
    { step: 8, text: "Forme les ailes en rabattant chaque côté vers le bas. Les ailes doivent être en forme de triangle allongé, comme les ailes delta du vrai Concorde.", icon: "↗️", tip: "Les ailes delta sont des ailes en forme de triangle. C'est la signature du Concorde !" },
    { step: 9, text: "Plie le bord arrière de chaque aile légèrement vers le bas (environ 5 mm) sur toute la longueur.", icon: "📐", tip: "Ce pli imite les élevons du vrai Concorde et stabilise le vol." },
    { step: 10, text: "Déplie les ailes. Elles doivent être presque plates avec un très léger V.", icon: "📐", tip: null },
    { step: 11, text: "Le Concorde est prêt ! Admire sa silhouette élégante avant de le lancer.", icon: "🎯", tip: "Lance-le avec force et légèrement vers le haut. Comme le vrai Concorde, il est fait pour la vitesse !" },
  ],

  // ============================================================
  // 22. FALCON - Le Faucon (9 plis)
  // ============================================================
  "falcon": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: null },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats la pointe vers le bas, jusqu'à environ 5 cm du bord supérieur.", icon: "📐", tip: "Ce pli crée le poids nécessaire pour un vol stable à moyenne distance." },
    { step: 6, text: "Rabats les deux coins supérieurs vers la ligne centrale, par-dessus la pointe repliée.", icon: "↗️", tip: null },
    { step: 7, text: "Replie le petit triangle de la pointe qui dépasse pour verrouiller les plis.", icon: "🔒", tip: null },
    { step: 8, text: "Retourne et plie l'avion en deux le long de la ligne centrale.", icon: "🔄", tip: null },
    { step: 9, text: "Forme les ailes : rabats chaque côté vers le bas. Fais des ailes moyennes, légèrement en flèche vers l'arrière.", icon: "↗️", tip: "Les ailes en flèche imitent les ailes d'un faucon en chasse." },
    { step: 10, text: "Au bout des ailes, plie un petit winglet vers le haut (1 cm).", icon: "📐", tip: null },
    { step: 11, text: "Déplie les ailes en léger V. Le Faucon est prêt à fondre sur sa proie !", icon: "🎯", tip: "Lance-le à hauteur d'épaule avec une force moyenne. Il volera loin et droit comme un faucon en piqué !" },
  ],

  // ============================================================
  // 23. SHARK - Le Requin (12 plis)
  // ============================================================
  "shark": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: "Le Requin est un avion agressif et rapide. Les plis doivent être bien nets !" },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats encore le bord incliné gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 6, text: "Rabats encore le bord incliné droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 7, text: "Rabats la pointe vers le bas sur environ 3 cm, puis replie-la vers le haut. Ça crée un nez plat et agressif.", icon: "📐", tip: "Ce double pli en accordéon donne au Requin son museau caractéristique." },
    { step: 8, text: "Replie l'avion en deux le long de la ligne centrale.", icon: "↔️", tip: null },
    { step: 9, text: "Forme les ailes en rabattant chaque côté. Les ailes doivent être courtes et angulaires.", icon: "↗️", tip: null },
    { step: 10, text: "À l'arrière de l'avion, découpe et plie vers le haut un grand aileron vertical (la nageoire dorsale du requin !) d'environ 3 cm.", icon: "✂️", tip: "C'est la touche finale qui donne l'apparence d'un requin !" },
    { step: 11, text: "De chaque côté à l'arrière des ailes, plie un petit volet vers le bas (les nageoires pectorales).", icon: "📐", tip: null },
    { step: 12, text: "Appuie bien sur tous les plis.", icon: "✋", tip: null },
    { step: 13, text: "Déplie les ailes en V. Le Requin est prêt à attaquer !", icon: "🎯", tip: "Lance-le fort et droit devant toi. Sa forme agressive fend l'air à toute vitesse !" },
  ],

  // ============================================================
  // 24. BUTTERFLY - Le Papillon (13 plis)
  // ============================================================
  "butterfly": [
    { step: 1, text: "Pose ta feuille A4 en mode paysage (le côté long en haut).", icon: "📄", tip: "Attention : pour le Papillon, la feuille est en mode paysage !" },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur (bord bas vers bord haut), puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale horizontale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin inférieur gauche vers la ligne centrale horizontale.", icon: "↗️", tip: "Tu as une pointe à gauche." },
    { step: 5, text: "Rabats encore le bord incliné du haut vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 6, text: "Rabats encore le bord incliné du bas vers la ligne centrale.", icon: "↗️", tip: "La pointe est maintenant plus fine." },
    { step: 7, text: "Plie la pointe vers la droite, jusqu'au milieu de la feuille.", icon: "📐", tip: null },
    { step: 8, text: "Retourne la feuille.", icon: "🔄", tip: null },
    { step: 9, text: "Plie l'avion en deux le long de la ligne centrale horizontale.", icon: "↔️", tip: null },
    { step: 10, text: "Forme les ailes en rabattant chaque côté vers le bas, en commençant le pli à environ 2 cm du nez.", icon: "↗️", tip: null },
    { step: 11, text: "Déplie les ailes bien à plat, presque horizontales.", icon: "📐", tip: null },
    { step: 12, text: "Avec tes doigts, courbe légèrement les ailes vers le haut pour leur donner une forme arrondie de papillon.", icon: "📐", tip: "Ne plie pas ! Courbe doucement le papier avec tes doigts pour un effet naturel." },
    { step: 13, text: "Au bout des ailes, plie les bords vers le haut pour former les bouts arrondis des ailes de papillon.", icon: "📐", tip: null },
    { step: 14, text: "Le Papillon est prêt ! Ses larges ailes courbées lui permettent de planer lentement.", icon: "🎯", tip: "Lance-le très doucement, presque en le lâchant d'en haut. Il flottera dans l'air comme un vrai papillon !" },
  ],

  // ============================================================
  // 25. STEALTH-FIGHTER - Le Chasseur Furtif (15 plis)
  // ============================================================
  "stealth-fighter": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: "Le Chasseur Furtif s'inspire du F-117 Nighthawk. Précision maximale requise !" },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin supérieur droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats la pointe vers le bas, jusqu'à environ 4 cm du haut.", icon: "📐", tip: null },
    { step: 6, text: "Rabats les deux coins supérieurs vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 7, text: "Replie la petite pointe qui dépasse vers le haut pour verrouiller.", icon: "🔒", tip: null },
    { step: 8, text: "Rabats encore les bords inclinés gauche et droit vers la ligne centrale.", icon: "↗️", tip: "Le nez est maintenant épais avec beaucoup de couches." },
    { step: 9, text: "Retourne et plie l'avion en deux le long de la ligne centrale.", icon: "🔄", tip: null },
    { step: 10, text: "Forme les ailes en rabattant chaque côté. Les ailes doivent être très angulaires avec un bord arrière en zigzag.", icon: "↗️", tip: "Les angles vifs sont la signature du F-117 furtif." },
    { step: 11, text: "À l'arrière, plie un aileron en V : deux petits volets inclinés vers l'extérieur (pas vertical comme d'habitude).", icon: "📐", tip: "Les vrais avions furtifs ont des ailerons en V pour éviter les radars !" },
    { step: 12, text: "Au bout de chaque aile, plie un winglet angulaire vers le bas (pas vers le haut).", icon: "📐", tip: null },
    { step: 13, text: "Plie le bord arrière des ailes en petits segments en zigzag pour imiter la forme du F-117.", icon: "📐", tip: "Ce sont des plis décoratifs qui donnent le look furtif." },
    { step: 14, text: "Appuie bien fort sur tous les plis, surtout le nez épais.", icon: "✋", tip: null },
    { step: 15, text: "Déplie les ailes. Ajuste l'angle pour un V assez prononcé.", icon: "📐", tip: null },
    { step: 16, text: "Le Chasseur Furtif est prêt ! Il vole bien dans toutes les conditions.", icon: "🎯", tip: "Lance-le avec force à angle moyen. C'est un avion polyvalent : il va loin, assez vite, et reste stable !" },
  ],

  // ============================================================
  // 26. DRAGON - Le Dragon (18 plis)
  // ============================================================
  "dragon": [
    { step: 1, text: "Pose ta feuille A4 en mode portrait.", icon: "📄", tip: "Le Dragon est très complexe ! Lis toutes les étapes avant de commencer." },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur, puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Plie la feuille en deux dans le sens de la largeur, puis déplie.", icon: "↔️", tip: null },
    { step: 4, text: "Rabats le coin supérieur gauche vers la ligne centrale verticale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats le coin supérieur droit vers la ligne centrale verticale.", icon: "↗️", tip: null },
    { step: 6, text: "Rabats la pointe vers le bas, jusqu'à la ligne centrale horizontale.", icon: "📐", tip: null },
    { step: 7, text: "Rabats les deux coins supérieurs vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 8, text: "Replie la petite pointe qui dépasse vers le haut pour verrouiller.", icon: "🔒", tip: null },
    { step: 9, text: "Rabats encore le bord incliné gauche vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 10, text: "Rabats encore le bord incliné droit vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 11, text: "Retourne et plie l'avion en deux le long de la ligne centrale.", icon: "🔄", tip: null },
    { step: 12, text: "Forme les ailes en rabattant chaque côté vers le bas. Les ailes doivent avoir une forme irrégulière, pointue à l'avant et large à l'arrière.", icon: "↗️", tip: null },
    { step: 13, text: "À l'arrière de chaque aile, fais une entaille de 3 cm et plie vers le haut pour créer les cornes du dragon.", icon: "✂️", tip: null },
    { step: 14, text: "Sur le bord arrière de chaque aile, fais des petites entailles en zigzag pour créer les écailles.", icon: "✂️", tip: "Les zigzags donnent un look de dragon et n'affectent pas trop le vol." },
    { step: 15, text: "Plie le bout du nez légèrement vers le bas pour créer la mâchoire du dragon.", icon: "📐", tip: null },
    { step: 16, text: "À l'arrière du fuselage, découpe une forme de queue de dragon et plie-la vers le haut.", icon: "✂️", tip: null },
    { step: 17, text: "Plie des petits volets à l'arrière des ailes pour contrôler les acrobaties.", icon: "📐", tip: "Ces volets te permettent de faire faire des figures folles au Dragon !" },
    { step: 18, text: "Appuie bien sur tous les plis.", icon: "✋", tip: null },
    { step: 19, text: "Déplie les ailes en V prononcé.", icon: "📐", tip: null },
    { step: 20, text: "Le Dragon est prêt à cracher du feu ! Dessine des yeux et des flammes si tu veux.", icon: "🎯", tip: "Lance-le en diagonale vers le haut avec force. Ajuste les volets pour le faire tourner, plonger ou faire des boucles !" },
  ],

  // ============================================================
  // 27. CONDOR - Le Condor (16 plis)
  // ============================================================
  "condor": [
    { step: 1, text: "Pose ta feuille A4 en mode paysage (le côté long en haut).", icon: "📄", tip: "Le Condor a besoin d'ailes très larges. Le mode paysage aide à les créer." },
    { step: 2, text: "Plie la feuille en deux dans le sens de la longueur (bord bas vers bord haut), puis déplie.", icon: "↔️", tip: null },
    { step: 3, text: "Rabats le coin supérieur gauche vers la ligne centrale horizontale.", icon: "↗️", tip: null },
    { step: 4, text: "Rabats le coin inférieur gauche vers la ligne centrale horizontale.", icon: "↗️", tip: null },
    { step: 5, text: "Rabats encore le bord incliné du haut vers la ligne centrale.", icon: "↗️", tip: null },
    { step: 6, text: "Rabats encore le bord incliné du bas vers la ligne centrale.", icon: "↗️", tip: "La pointe est maintenant bien fine et solide." },
    { step: 7, text: "Rabats la pointe vers la droite sur environ 4 cm, puis déplie.", icon: "📐", tip: "Ce pli et dépli crée une ligne de repère pour le nez." },
    { step: 8, text: "Ouvre les couches de la pointe et replie-la vers l'intérieur en suivant la ligne de repère (pli inversé).", icon: "🔒", tip: "Ce pli inversé renforce le nez et l'empêche de s'ouvrir." },
    { step: 9, text: "Retourne la feuille.", icon: "🔄", tip: null },
    { step: 10, text: "Plie l'avion en deux le long de la ligne centrale horizontale.", icon: "↔️", tip: null },
    { step: 11, text: "Forme les ailes en rabattant chaque côté vers le bas. Les ailes doivent être TRÈS larges — ne laisse que 5 mm de fuselage.", icon: "↗️", tip: "Le Condor a la plus grande envergure d'ailes. C'est ce qui le fait planer si longtemps." },
    { step: 12, text: "Au bout de chaque aile, plie vers le haut un winglet de 3 cm.", icon: "📐", tip: null },
    { step: 13, text: "À l'arrière des ailes, plie de petits volets vers le haut (environ 5 mm) sur toute la largeur.", icon: "📐", tip: "Ces volets agissent comme les plumes d'un condor et le stabilisent." },
    { step: 14, text: "Au bout des ailes, avant les winglets, fais des petites entailles en forme de plumes.", icon: "✂️", tip: "C'est décoratif : ça imite les grandes plumes écartées d'un condor en vol." },
    { step: 15, text: "Appuie bien sur tous les plis, surtout le nez renforcé.", icon: "✋", tip: null },
    { step: 16, text: "Déplie les ailes presque à l'horizontale, avec un V à peine visible.", icon: "📐", tip: null },
    { step: 17, text: "Le Condor est prêt ! Ses immenses ailes lui permettent de planer pendant très longtemps.", icon: "🎯", tip: "Lance-le très doucement depuis un endroit en hauteur (un escalier, un balcon). Comme un vrai condor, il utilise les courants d'air pour planer sans effort !" },
  ],
};

export default instructions;
