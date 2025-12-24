// ============================================
// L'EFFACEUR - Application de Reconditionnement Basket
// ============================================

// Programme complet
const PROGRAM = {
    phase1: {
        name: "Reconditionnement",
        weeks: [1, 2],
        sessions: {
            A: {
                name: "Cardio + Bas du corps",
                day: "Lundi",
                duration: 60,
                calories: 450,
                xp: 150,
                icon: "🦵",
                blocks: [
                    {
                        name: "ÉCHAUFFEMENT",
                        duration: 10,
                        exercises: [
                            {
                                name: "Mobilité chevilles",
                                duration: null,
                                reps: "20 cercles par cheville",
                                icon: "🦶",
                                instructions: [
                                    "Assis, 20 cercles par cheville dans chaque sens",
                                    "Mobiliser avec les mains"
                                ],
                                tips: "Prenez votre temps pour bien échauffer les articulations"
                            },
                            {
                                name: "Cat-Cow",
                                duration: null,
                                reps: "15 répétitions",
                                icon: "🐱",
                                instructions: [
                                    "4 pattes, alterner dos rond/creux",
                                    "15 répétitions lentes"
                                ],
                                tips: "Respirez : inspirez en creusant, expirez en arrondissant"
                            },
                            {
                                name: "Marche fente-genou-poitrine",
                                duration: null,
                                reps: "10m",
                                icon: "🚶",
                                instructions: [
                                    "10m, alterner jambes",
                                    "Serrer genoux contre buste",
                                    "Redescendre en fente légère",
                                    "Tourner le bassin à droite puis à gauche"
                                ],
                                tips: "Gardez le buste droit et stable"
                            }
                        ]
                    },
                    {
                        name: "BLOC CARDIO INTÉRIEUR",
                        duration: 20,
                        exercises: [
                            {
                                name: "Jumping Jacks",
                                duration: 40,
                                rest: 20,
                                reps: "25-30 reps",
                                sets: 4,
                                icon: "⭐",
                                instructions: [
                                    "Pieds joints, bras le long du corps",
                                    "Sauter : pieds écartés largeur 1m20 + bras en V au-dessus tête",
                                    "Atterrissage sur demi-pointes, genoux souples"
                                ],
                                tips: "Gardez un rythme régulier et contrôlé"
                            },
                            {
                                name: "Mountain Climbers contrôlés",
                                duration: 40,
                                rest: 20,
                                reps: "20-24 reps",
                                sets: 4,
                                icon: "🏔️",
                                instructions: [
                                    "Position pompe, bras tendus sous épaules",
                                    "Alterner genoux vers poitrine, dos plat",
                                    "Fessiers à hauteur épaules (ne monte PAS)"
                                ],
                                tips: "Focus sur la stabilité du bassin"
                            },
                            {
                                name: "Squat Pulses",
                                duration: 40,
                                rest: 20,
                                reps: "40 sec non-stop",
                                sets: 4,
                                icon: "🔥",
                                instructions: [
                                    "Descendre en squat 90° et RESTER",
                                    "Micro-mouvements haut-bas (10 cm amplitude)",
                                    "Poids sur talons, genoux stables"
                                ],
                                tips: "Ça brûle ? C'est normal, tenez bon !"
                            },
                            {
                                name: "Shadow Boxing bas",
                                duration: 40,
                                rest: 20,
                                reps: "40-50 frappes",
                                sets: 4,
                                icon: "🥊",
                                instructions: [
                                    "Position semi-fléchie, pieds actifs",
                                    "Alterner directs/crochets",
                                    "Pivoter hanches"
                                ],
                                tips: "Restez bas et explosif"
                            },
                            {
                                name: "Skaters",
                                duration: 40,
                                rest: 20,
                                reps: "10-12 par côté",
                                sets: 4,
                                icon: "⛸️",
                                instructions: [
                                    "Saut latéral d'une jambe à l'autre",
                                    "Réception sur demi-pointe, genou fléchi",
                                    "Amplitude 60-80 cm"
                                ],
                                tips: "Contrôlez l'atterrissage"
                            }
                        ]
                    },
                    {
                        name: "BLOC RENFORCEMENT",
                        duration: 25,
                        exercises: [
                            {
                                name: "Squats position large",
                                duration: null,
                                reps: "3×12 reps",
                                rest: 90,
                                icon: "🏋️",
                                instructions: [
                                    "Tenir ballon contre poitrine, pieds largeur épaules + 10 cm",
                                    "Pointes 15° vers extérieur, descente 3 sec",
                                    "Genoux alignés sur pointes (ne rentrent PAS vers intérieur)"
                                ],
                                tips: "IMPORTANT : Genoux alignés sur les pointes de pieds"
                            },
                            {
                                name: "Fentes statiques",
                                duration: null,
                                reps: "3×10 par jambe",
                                rest: 60,
                                icon: "🦿",
                                instructions: [
                                    "Pieds écartés avant/arrière 80 cm",
                                    "Genou avant ne dépasse PAS pointe du pied",
                                    "Descendre jusqu'à genou arrière à 5 cm du sol, buste vertical"
                                ],
                                tips: "Contrôlez la descente, poussez avec le talon avant"
                            },
                            {
                                name: "Pont fessier une jambe",
                                duration: null,
                                reps: "3×12 par jambe",
                                rest: 45,
                                icon: "🌉",
                                instructions: [
                                    "Sur le dos, un pied au sol (talon à 30 cm des fesses)",
                                    "Autre jambe tendue à 45°",
                                    "Monter bassin en contractant fessier",
                                    "Tenir 2 sec en haut, épaules restent au sol"
                                ],
                                tips: "Serrez fort le fessier en haut du mouvement"
                            },
                            {
                                name: "Mollets excentriques",
                                duration: null,
                                reps: "3×8 par jambe",
                                rest: 60,
                                icon: "🦶",
                                instructions: [
                                    "Debout sur marche/cale, monter sur pointes sur 2 pieds",
                                    "Descendre lentement sur 1 pied (5 secondes)",
                                    "Remonter sur 2 pieds"
                                ],
                                tips: "CRUCIAL pour la prévention - Ne pas négliger !"
                            }
                        ]
                    },
                    {
                        name: "RETOUR AU CALME",
                        duration: 5,
                        exercises: [
                            {
                                name: "Étirement quadriceps",
                                duration: 30,
                                reps: "30 sec par jambe",
                                icon: "🧘",
                                instructions: ["Debout, attraper le pied et tirer le talon vers les fesses"],
                                tips: "Respirez profondément"
                            },
                            {
                                name: "Étirement ischio-jambiers",
                                duration: 30,
                                reps: "30 sec par jambe",
                                icon: "🧘",
                                instructions: ["Jambe tendue sur un support, pencher le buste vers l'avant"],
                                tips: "Gardez le dos droit"
                            },
                            {
                                name: "Étirement mollets",
                                duration: 30,
                                reps: "30 sec par jambe",
                                icon: "🧘",
                                instructions: ["Position fente, pousser le talon arrière vers le sol"],
                                tips: "Sentez l'étirement dans le mollet"
                            }
                        ]
                    }
                ]
            },
            B: {
                name: "Explosivité + Haut du corps",
                day: "Mercredi",
                duration: 60,
                calories: 400,
                xp: 150,
                icon: "💪",
                blocks: [
                    {
                        name: "ÉCHAUFFEMENT",
                        duration: 10,
                        exercises: [
                            {
                                name: "Mobilité chevilles + Cat-Cow",
                                duration: null,
                                reps: "Comme séance A",
                                icon: "🦶",
                                instructions: ["Même routine que la séance A"],
                                tips: "Prenez le temps de bien vous échauffer"
                            },
                            {
                                name: "Rotations de hanches",
                                duration: null,
                                reps: "10 par jambe",
                                icon: "🔄",
                                instructions: ["10 par jambe, rotation interne et externe"],
                                tips: "Mouvements amples et contrôlés"
                            },
                            {
                                name: "Jumping jacks légers",
                                duration: null,
                                reps: "20 reps",
                                icon: "⭐",
                                instructions: ["20 répétitions modérées pour activer le cardio"],
                                tips: "Échauffez-vous progressivement"
                            }
                        ]
                    },
                    {
                        name: "BLOC CARDIO-EXPLOSIF",
                        duration: 20,
                        exercises: [
                            {
                                name: "High Knees modérés",
                                duration: 45,
                                rest: 15,
                                reps: "50-60 contacts",
                                sets: 3,
                                icon: "🏃",
                                instructions: [
                                    "Course sur place, genoux à 90°, bras à 90°",
                                    "Poser sur demi-pointes, buste droit"
                                ],
                                tips: "Tour 1: 45s | Tour 2: 40s | Tour 3: 30s"
                            },
                            {
                                name: "Inchworms",
                                duration: 45,
                                rest: 15,
                                reps: "6-8 reps",
                                sets: 3,
                                icon: "🐛",
                                instructions: [
                                    "Mains au sol devant pieds",
                                    "Marcher vers avant en planche",
                                    "Marcher pieds vers mains"
                                ],
                                tips: "Gardez les jambes tendues"
                            },
                            {
                                name: "Fentes alternées",
                                duration: 45,
                                rest: 15,
                                reps: "14-16 reps",
                                sets: 3,
                                icon: "🦿",
                                instructions: [
                                    "Tempo contrôlé, genou arrière à 5 cm du sol",
                                    "Repousser avec jambe avant pour changer"
                                ],
                                tips: "Alternez de manière fluide"
                            },
                            {
                                name: "Plank Jacks",
                                duration: 45,
                                rest: 15,
                                reps: "20-24 reps",
                                sets: 3,
                                icon: "🧱",
                                instructions: [
                                    "Position planche sur mains",
                                    "Écarter/ramener pieds",
                                    "Corps rigide, fessiers ne montent PAS"
                                ],
                                tips: "Gainage total"
                            },
                            {
                                name: "Butt Kicks",
                                duration: 45,
                                rest: 15,
                                reps: "50-60 contacts",
                                sets: 3,
                                icon: "🦵",
                                instructions: [
                                    "Course sur place",
                                    "Ramener talons vers fessiers",
                                    "Buste légèrement penché avant"
                                ],
                                tips: "Rythme rapide"
                            }
                        ]
                    },
                    {
                        name: "RENFORCEMENT HAUT DU CORPS",
                        duration: 25,
                        exercises: [
                            {
                                name: "Pompes",
                                duration: null,
                                reps: "4×10-12",
                                rest: 60,
                                icon: "💪",
                                instructions: [
                                    "Mains largeur épaules + 10 cm, coudes à 45° du corps",
                                    "Descendre poitrine à 5 cm du sol, corps gainé",
                                    "Sur genoux si besoin"
                                ],
                                tips: "Qualité avant quantité"
                            },
                            {
                                name: "Rowing élastique",
                                duration: null,
                                reps: "3×15",
                                rest: 45,
                                icon: "🚣",
                                instructions: [
                                    "Élastique attaché devant (poignée porte)",
                                    "Tirer coudes vers arrière, omoplates serrées",
                                    "Buste droit, légère flexion genoux"
                                ],
                                tips: "Serrez les omoplates à chaque répétition"
                            },
                            {
                                name: "Gainage planche",
                                duration: 45,
                                reps: "3×30-45 sec",
                                rest: 60,
                                icon: "🧱",
                                instructions: [
                                    "Sur avant-bras, corps aligné tête-pieds",
                                    "Fessiers contractés, ne pas cambrer"
                                ],
                                tips: "Corps droit comme une planche"
                            },
                            {
                                name: "Gainage latéral",
                                duration: 30,
                                reps: "3×20-30 sec par côté",
                                rest: 45,
                                icon: "📐",
                                instructions: [
                                    "Sur un avant-bras",
                                    "Corps aligné, hanches hautes"
                                ],
                                tips: "Ne laissez pas les hanches s'affaisser"
                            }
                        ]
                    },
                    {
                        name: "RETOUR AU CALME",
                        duration: 5,
                        exercises: [
                            {
                                name: "Étirements haut du corps",
                                duration: 60,
                                reps: "5 min",
                                icon: "🧘",
                                instructions: ["Épaules, pectoraux, triceps, dos"],
                                tips: "Respirez et détendez-vous"
                            }
                        ]
                    }
                ]
            },
            C: {
                name: "Course + Cardio + Coordination",
                day: "Samedi",
                duration: 60,
                calories: 500,
                xp: 175,
                icon: "🏀",
                blocks: [
                    {
                        name: "ÉCHAUFFEMENT",
                        duration: 10,
                        exercises: [
                            {
                                name: "Routine habituelle",
                                duration: null,
                                reps: "Comme séances précédentes",
                                icon: "🔥",
                                instructions: ["Même routine + ajouter les exercices suivants"],
                                tips: "Bien s'échauffer pour la course"
                            },
                            {
                                name: "Pas chassés",
                                duration: null,
                                reps: "2×10m par sens",
                                icon: "👟",
                                instructions: ["2 × 10m par sens"],
                                tips: "Restez bas et explosif"
                            },
                            {
                                name: "Course arrière",
                                duration: null,
                                reps: "2×10m",
                                icon: "🔙",
                                instructions: ["2 × 10m en course arrière"],
                                tips: "Regardez par-dessus l'épaule"
                            }
                        ]
                    },
                    {
                        name: "BLOC COURSE EXTÉRIEURE",
                        duration: 30,
                        exercises: [
                            {
                                name: "Course continue modérée",
                                duration: 1200,
                                reps: "20 min",
                                icon: "🏃",
                                instructions: [
                                    "20 min à 65-70% FCmax",
                                    "Tu dois pouvoir parler"
                                ],
                                tips: "Rythme conversationnel"
                            },
                            {
                                name: "Intervalles VMA",
                                duration: 120,
                                rest: 60,
                                reps: "3×2 min",
                                sets: 3,
                                icon: "⚡",
                                instructions: [
                                    "2 min course à VMA (vitesse soutenue)",
                                    "1 min récupération entre chaque"
                                ],
                                tips: "Donnez tout sur ces intervalles !"
                            }
                        ]
                    },
                    {
                        name: "BLOC BASKET COORDINATION",
                        duration: 25,
                        exercises: [
                            {
                                name: "Appuis basket au ralenti",
                                duration: null,
                                reps: "3×10 reps",
                                icon: "🏀",
                                instructions: [
                                    "Simulations départ direct-feinte de tir",
                                    "Focus atterrissage équilibré",
                                    "Genoux vers extérieur, varier les angles"
                                ],
                                tips: "Qualité des appuis avant vitesse"
                            },
                            {
                                name: "Déplacements défensifs",
                                duration: 30,
                                rest: 30,
                                reps: "4×30 sec",
                                icon: "🛡️",
                                instructions: [
                                    "Position défensive : fessier bas, pieds actifs",
                                    "Déplacements droite, 2 appuis vers l'avant pour monter en contestation",
                                    "Déplacement arrière, recommencer"
                                ],
                                tips: "Restez bas et explosif"
                            },
                            {
                                name: "Side steps",
                                duration: null,
                                reps: "3×8 de chaque côté",
                                icon: "↔️",
                                instructions: [
                                    "Drible side steps, réception 1 temps",
                                    "Vers la droite puis vers la gauche",
                                    "Genou légèrement fléchi, contrôle équilibre 2 sec"
                                ],
                                tips: "Stabilisez-vous à chaque réception"
                            },
                            {
                                name: "Power dribles",
                                duration: 45,
                                reps: "3×45 sec",
                                icon: "🏀",
                                instructions: [
                                    "Dribbles statiques bas, 2 mains alternées",
                                    "Appuyer fort sur les dribles",
                                    "Alterner 5 hauteur genoux et 5 hauteur bassin"
                                ],
                                tips: "Force et contrôle"
                            }
                        ]
                    },
                    {
                        name: "RETOUR AU CALME",
                        duration: 5,
                        exercises: [
                            {
                                name: "Étirements complets",
                                duration: 300,
                                reps: "5 min",
                                icon: "🧘",
                                instructions: ["Tous les groupes musculaires sollicités"],
                                tips: "Félicitations pour cette séance complète !"
                            }
                        ]
                    }
                ]
            },
            daily: {
                name: "Routine quotidienne",
                day: "Mar, Jeu, Ven, Dim",
                duration: 15,
                calories: 80,
                xp: 50,
                icon: "🌅",
                blocks: [
                    {
                        name: "MOBILITÉ",
                        duration: 3,
                        exercises: [
                            {
                                name: "Position chevalier",
                                duration: 60,
                                reps: "1 min par côté",
                                icon: "🦵",
                                instructions: [
                                    "Pousser le genou vers l'avant",
                                    "Ouvrir les hanches le plus possible"
                                ],
                                tips: "Respirez profondément"
                            },
                            {
                                name: "Flip flaps assis",
                                duration: 60,
                                reps: "1 min",
                                icon: "🦋",
                                instructions: ["Genoux sur le côté, alterner"],
                                tips: "Mouvements fluides"
                            }
                        ]
                    },
                    {
                        name: "GAINAGE",
                        duration: 6,
                        exercises: [
                            {
                                name: "Planche",
                                duration: 40,
                                reps: "3×40 sec",
                                icon: "🧱",
                                instructions: ["Sur mains ou coudes"],
                                tips: "Corps aligné"
                            },
                            {
                                name: "Planche latérale",
                                duration: 20,
                                reps: "2×20 sec par côté",
                                icon: "📐",
                                instructions: ["Hanches hautes"],
                                tips: "Stabilité"
                            },
                            {
                                name: "Superman",
                                duration: null,
                                reps: "3×10 reps",
                                icon: "🦸",
                                instructions: [
                                    "Sur le ventre",
                                    "Lever bras/jambes opposés"
                                ],
                                tips: "Contrôlez le mouvement"
                            }
                        ]
                    },
                    {
                        name: "PRÉVENTIF",
                        duration: 6,
                        exercises: [
                            {
                                name: "Mollets excentriques",
                                duration: null,
                                reps: "2×10 par jambe",
                                icon: "🦶",
                                instructions: ["NON NÉGOCIABLE - Descente lente 5 sec"],
                                tips: "CRUCIAL pour la prévention"
                            },
                            {
                                name: "Équilibre yeux fermés",
                                duration: 30,
                                reps: "3×30 sec par pied",
                                icon: "⚖️",
                                instructions: ["Sur un pied, yeux fermés"],
                                tips: "Proprioception"
                            },
                            {
                                name: "Squats une jambe assistés",
                                duration: null,
                                reps: "2×8 par jambe",
                                icon: "🦿",
                                instructions: ["Au mur pour l'équilibre"],
                                tips: "Contrôle et stabilité"
                            }
                        ]
                    }
                ]
            }
        }
    },
    phase2: {
        name: "Reprise basket + Maintien",
        weeks: [3, 4, 5],
        sessions: {
            A: {
                name: "ENTRAÎNEMENT BASKET",
                day: "Lundi",
                duration: 90,
                calories: 600,
                xp: 200,
                icon: "🏀",
                isBasketTraining: true,
                blocks: []
            },
            B: {
                name: "Renforcement complet",
                day: "Mercredi",
                duration: 60,
                calories: 450,
                xp: 175,
                icon: "💪",
                blocks: [
                    {
                        name: "ÉCHAUFFEMENT",
                        duration: 8,
                        exercises: [
                            {
                                name: "Mobilité rapide",
                                duration: null,
                                reps: "3 min",
                                icon: "🔄",
                                instructions: ["Chevilles, hanches, épaules"],
                                tips: "Bougez toutes les articulations"
                            },
                            {
                                name: "Jumping jacks",
                                duration: 30,
                                reps: "30 sec",
                                icon: "⭐",
                                instructions: ["Activation cardio"],
                                tips: "Montez le rythme progressivement"
                            },
                            {
                                name: "Mountain climbers légers",
                                duration: 30,
                                reps: "30 sec",
                                icon: "🏔️",
                                instructions: ["Activation core"],
                                tips: "Rythme modéré"
                            }
                        ]
                    },
                    {
                        name: "CIRCUIT FULL BODY",
                        duration: 40,
                        exercises: [
                            {
                                name: "Squats goblet avec ballon",
                                duration: 45,
                                rest: 15,
                                reps: "12-15 reps",
                                sets: 3,
                                icon: "🏋️",
                                instructions: ["Tempo explosif à la montée"],
                                tips: "Poussez fort sur les talons"
                            },
                            {
                                name: "Pompes complètes",
                                duration: 45,
                                rest: 15,
                                reps: "10-15 reps",
                                sets: 3,
                                icon: "💪",
                                instructions: ["Qualité avant quantité"],
                                tips: "Descendez jusqu'en bas"
                            },
                            {
                                name: "Fentes alternées sautées",
                                duration: 45,
                                rest: 15,
                                reps: "8-12 reps",
                                sets: 3,
                                icon: "🦿",
                                instructions: ["Atterrissage contrôlé"],
                                tips: "Amorti souple"
                            },
                            {
                                name: "Rowing élastique",
                                duration: 45,
                                rest: 15,
                                reps: "15-20 reps",
                                sets: 3,
                                icon: "🚣",
                                instructions: ["Serrer omoplates"],
                                tips: "Tirez avec le dos"
                            },
                            {
                                name: "Russian Twists",
                                duration: 45,
                                rest: 15,
                                reps: "20-24 reps",
                                sets: 3,
                                icon: "🔄",
                                instructions: ["Avec ballon, 10-12 par côté"],
                                tips: "Contrôle du core"
                            },
                            {
                                name: "Burpees modifiés",
                                duration: 45,
                                rest: 15,
                                reps: "8-12 reps",
                                sets: 3,
                                icon: "🔥",
                                instructions: ["Sans saut si fatigué"],
                                tips: "Adaptez à votre niveau"
                            },
                            {
                                name: "Planche",
                                duration: 45,
                                rest: 15,
                                reps: "45 sec hold maximum",
                                sets: 3,
                                icon: "🧱",
                                instructions: ["Tenez le plus longtemps possible"],
                                tips: "Jusqu'à l'échec propre"
                            }
                        ]
                    },
                    {
                        name: "FINISHER PRÉVENTIF",
                        duration: 10,
                        exercises: [
                            {
                                name: "Mollets excentriques",
                                duration: null,
                                reps: "3×10 par jambe",
                                icon: "🦶",
                                instructions: ["Descente 5 secondes"],
                                tips: "Ne jamais négliger !"
                            },
                            {
                                name: "Gainage latéral",
                                duration: 30,
                                reps: "2×30 sec par côté",
                                icon: "📐",
                                instructions: ["Hanches stables"],
                                tips: "Stabilité du core"
                            },
                            {
                                name: "Pont fessier",
                                duration: null,
                                reps: "2×15 reps",
                                icon: "🌉",
                                instructions: ["Contractez fort en haut"],
                                tips: "Activation fessiers"
                            }
                        ]
                    },
                    {
                        name: "RETOUR AU CALME",
                        duration: 2,
                        exercises: [
                            {
                                name: "Étirements rapides + Respiration",
                                duration: 120,
                                reps: "2 min",
                                icon: "🧘",
                                instructions: [
                                    "Quadriceps, ischio, épaules - 20 sec chacun",
                                    "Respiration 4-4-6 : 3 cycles"
                                ],
                                tips: "Récupération optimale"
                            }
                        ]
                    }
                ]
            },
            C: {
                name: "Course (optionnel)",
                day: "Samedi",
                duration: 30,
                calories: 250,
                xp: 100,
                icon: "🏃",
                optional: true,
                blocks: [
                    {
                        name: "OPTION A - FRACTIONNÉ",
                        duration: 30,
                        exercises: [
                            {
                                name: "Échauffement course",
                                duration: 300,
                                reps: "5 min",
                                icon: "🔥",
                                instructions: ["Allure légère"],
                                tips: "Si tu te sens bien"
                            },
                            {
                                name: "Fractionné",
                                duration: 40,
                                rest: 80,
                                reps: "40 sec effort / 80 sec récup × 6",
                                sets: 6,
                                icon: "⚡",
                                instructions: ["75% effort, 6 répétitions"],
                                tips: "Pousse sur les intervalles"
                            },
                            {
                                name: "Retour au calme",
                                duration: 300,
                                reps: "5 min",
                                icon: "🧘",
                                instructions: ["Marche/trot léger"],
                                tips: "Récupération active"
                            }
                        ]
                    },
                    {
                        name: "OPTION B - LÉGER",
                        duration: 20,
                        exercises: [
                            {
                                name: "Course continue légère",
                                duration: 1200,
                                reps: "20 min",
                                icon: "🏃",
                                instructions: ["60-65% FCmax (allure conversationnelle)"],
                                tips: "Si tu es fatigué"
                            }
                        ]
                    },
                    {
                        name: "OPTION C - REPOS",
                        duration: 45,
                        exercises: [
                            {
                                name: "Marche + étirements",
                                duration: 2700,
                                reps: "30 min marche + 15 min étirements",
                                icon: "🚶",
                                instructions: ["Écoute ton corps : la récupération prime !"],
                                tips: "Si tu es TRÈS fatigué"
                            }
                        ]
                    }
                ]
            },
            D: {
                name: "ENTRAÎNEMENT BASKET",
                day: "Jeudi",
                duration: 90,
                calories: 600,
                xp: 200,
                icon: "🏀",
                isBasketTraining: true,
                blocks: []
            },
            daily: {
                name: "Routine préventive",
                day: "Mar, Ven",
                duration: 15,
                calories: 80,
                xp: 50,
                icon: "🛡️",
                blocks: [
                    {
                        name: "CRUCIAL APRÈS BASKET",
                        duration: 15,
                        exercises: [
                            {
                                name: "Mollets excentriques",
                                duration: null,
                                reps: "3×8 par jambe",
                                icon: "🦶",
                                instructions: ["NON NÉGOCIABLE"],
                                tips: "Prévention blessures"
                            },
                            {
                                name: "Mobilité chevilles",
                                duration: 180,
                                reps: "3 min",
                                icon: "🦶",
                                instructions: ["Cercles, flexions"],
                                tips: "Récupération articulaire"
                            },
                            {
                                name: "Gainage planche",
                                duration: 30,
                                reps: "2×30 sec",
                                icon: "🧱",
                                instructions: ["Maintien core"],
                                tips: "Stabilité"
                            },
                            {
                                name: "Gainage latéral",
                                duration: 20,
                                reps: "2×20 sec par côté",
                                icon: "📐",
                                instructions: ["Hanches hautes"],
                                tips: "Équilibre musculaire"
                            },
                            {
                                name: "Étirements complets",
                                duration: 300,
                                reps: "5 min",
                                icon: "🧘",
                                instructions: ["Tous les muscles"],
                                tips: "Récupération optimale"
                            }
                        ]
                    }
                ]
            }
        }
    }
};

// Badges
const BADGES = [
    { id: 'first_workout', name: 'Premier Pas', icon: '🌟', desc: 'Première séance terminée', condition: (stats) => stats.totalWorkouts >= 1 },
    { id: 'streak_3', name: 'En Feu', icon: '🔥', desc: '3 jours consécutifs', condition: (stats) => stats.currentStreak >= 3 },
    { id: 'streak_7', name: 'Inarrêtable', icon: '💥', desc: '7 jours consécutifs', condition: (stats) => stats.currentStreak >= 7 },
    { id: 'week_complete', name: 'Semaine Parfaite', icon: '🏆', desc: 'Semaine complète', condition: (stats) => stats.weeklyWorkouts >= 4 },
    { id: 'xp_500', name: 'Débutant', icon: '⭐', desc: '500 XP atteints', condition: (stats) => stats.totalXP >= 500 },
    { id: 'xp_1000', name: 'Confirmé', icon: '🌟', desc: '1000 XP atteints', condition: (stats) => stats.totalXP >= 1000 },
    { id: 'xp_2500', name: 'Expert', icon: '💫', desc: '2500 XP atteints', condition: (stats) => stats.totalXP >= 2500 },
    { id: 'early_bird', name: 'Lève-tôt', icon: '🌅', desc: 'Séance avant 8h', condition: (stats) => stats.earlyWorkout },
    { id: 'night_owl', name: 'Noctambule', icon: '🌙', desc: 'Séance après 20h', condition: (stats) => stats.nightWorkout },
    { id: 'cardio_king', name: 'Roi du Cardio', icon: '❤️', desc: '5 séances cardio', condition: (stats) => stats.cardioSessions >= 5 },
    { id: 'strength_master', name: 'Force Pure', icon: '💪', desc: '5 séances renfo', condition: (stats) => stats.strengthSessions >= 5 },
    { id: 'basket_ready', name: 'Prêt pour le Terrain', icon: '🏀', desc: 'Phase 2 atteinte', condition: (stats) => stats.currentWeek >= 3 }
];

// Quotes motivationnelles
const QUOTES = [
    "L'Effaceur Is Back! 🏀",
    "Chaque séance te rapproche du terrain!",
    "La douleur est temporaire, la fierté est éternelle!",
    "Tu es plus fort que tu ne le penses!",
    "Le basket t'attend, prépare-toi!",
    "Pas d'excuse, que des résultats!",
    "Champion en construction!",
    "La sueur d'aujourd'hui, la victoire de demain!",
    "Tu as déjà fait le plus dur : commencer!",
    "Chaque jour compte!",
    "Le retour sera épique!"
];

// Tips
const TIPS = [
    "💧 Hydratation : 2,5-3L par jour minimum",
    "🥩 Protéines : 160-180g par jour (1,6-1,8g/kg)",
    "😴 Sommeil : 7-8h non négociable",
    "🧊 Glace : 10-15 min sur genoux après séances intenses si besoin",
    "⚠️ Douleur >4/10 = repos immédiat, pas d'exception",
    "🦶 Mollets excentriques OBLIGATOIRES après chaque basket",
    "🎯 Genoux alignés sur les pointes de pieds - TOUJOURS",
    "🔥 Échauffement articulaire complet avant chaque séance",
    "📈 N'augmente pas le volume pliométrie >10% par semaine",
    "🧘 La récupération est aussi importante que l'entraînement"
];

// State
let state = {
    currentWeek: 1,
    currentPhase: 1,
    totalXP: 0,
    currentStreak: 0,
    bestStreak: 0,
    totalWorkouts: 0,
    totalMinutes: 0,
    totalCalories: 0,
    completedSessions: [],
    unlockedBadges: [],
    weeklyProgress: [0, 0, 0, 0, 0],
    lastWorkoutDate: null,
    cardioSessions: 0,
    strengthSessions: 0,
    earlyWorkout: false,
    nightWorkout: false,
    darkMode: false,
    notifications: false
};

// Current workout state
let workoutState = {
    active: false,
    session: null,
    currentBlockIndex: 0,
    currentExerciseIndex: 0,
    exercises: [],
    timer: null,
    timeRemaining: 0,
    isPaused: true,
    isRest: false
};

// DOM Elements
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initApp();
});

function loadState() {
    const saved = localStorage.getItem('effaceur_state');
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
    }
    updateStreak();
}

function saveState() {
    localStorage.setItem('effaceur_state', JSON.stringify(state));
}

function updateStreak() {
    if (state.lastWorkoutDate) {
        const last = new Date(state.lastWorkoutDate);
        const today = new Date();
        const diffDays = Math.floor((today - last) / (1000 * 60 * 60 * 24));

        if (diffDays > 1) {
            state.currentStreak = 0;
        }
    }
}

function initApp() {
    // Hide splash after animation
    setTimeout(() => {
        $('#splash').classList.add('hidden');
        $('#app').classList.remove('hidden');
    }, 2500);

    // Set up navigation
    setupNavigation();

    // Set up settings
    setupSettings();

    // Render pages
    renderHome();
    renderWorkout();
    renderProgress();
    renderProfile();

    // Apply dark mode if saved
    if (state.darkMode) {
        document.body.classList.add('light-mode');
        $('#darkModeToggle').checked = true;
    }
}

function setupNavigation() {
    $$('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;

            // Update active tab
            $$('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active page
            $$('.page').forEach(p => p.classList.remove('active'));
            $(`#${tabName}`).classList.add('active');
        });
    });
}

function setupSettings() {
    $('#darkModeToggle').addEventListener('change', (e) => {
        state.darkMode = e.target.checked;
        document.body.classList.toggle('light-mode', state.darkMode);
        saveState();
    });

    $('#weekSelect').addEventListener('change', (e) => {
        state.currentWeek = parseInt(e.target.value);
        state.currentPhase = state.currentWeek <= 2 ? 1 : 2;
        saveState();
        renderHome();
        renderWorkout();
    });

    $('#resetBtn').addEventListener('click', () => {
        if (confirm('Êtes-vous sûr de vouloir réinitialiser toute votre progression ?')) {
            localStorage.removeItem('effaceur_state');
            location.reload();
        }
    });

    $('#weekSelect').value = state.currentWeek;
}

function renderHome() {
    // Update week badge
    $('#currentWeek').textContent = state.currentWeek;
    $('#currentPhase').textContent = state.currentWeek <= 2 ? 'Phase 1 - Reconditionnement' : 'Phase 2 - Reprise';

    // Update motivation quote
    $('#motivationQuote').textContent = QUOTES[Math.floor(Math.random() * QUOTES.length)];

    // Update today's card
    renderTodayCard();

    // Update week days
    renderWeekDays();

    // Update stats
    $('#completedSessions').textContent = state.totalWorkouts;
    $('#totalMinutes').textContent = state.totalMinutes;
    $('#calories').textContent = state.totalCalories;
    $('#streakCount').textContent = state.currentStreak;
    $('#xpCount').textContent = state.totalXP;
}

function renderTodayCard() {
    const today = new Date().getDay(); // 0 = Sunday
    const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const phase = state.currentWeek <= 2 ? PROGRAM.phase1 : PROGRAM.phase2;

    let session = null;
    let sessionKey = null;

    // Determine today's session based on phase
    if (state.currentWeek <= 2) {
        // Phase 1
        if (today === 1) { sessionKey = 'A'; }
        else if (today === 3) { sessionKey = 'B'; }
        else if (today === 6) { sessionKey = 'C'; }
        else { sessionKey = 'daily'; }
    } else {
        // Phase 2
        if (today === 1 || today === 4) { sessionKey = 'A'; }
        else if (today === 3) { sessionKey = 'B'; }
        else if (today === 6) { sessionKey = 'C'; }
        else if (today === 2 || today === 5) { sessionKey = 'daily'; }
        else { sessionKey = null; }
    }

    if (sessionKey && phase.sessions[sessionKey]) {
        session = phase.sessions[sessionKey];
    }

    if (session) {
        $('#todayCard').innerHTML = `
            <div class="session-type">
                <span class="session-icon">${session.icon}</span>
                <div>
                    <div class="session-name">${session.name}</div>
                    <div class="session-duration">${dayNames[today]} • ${session.duration} min</div>
                </div>
            </div>
            <div class="session-preview">
                ${session.blocks?.slice(0, 3).map(b => `<span class="preview-tag">${b.name}</span>`).join('') || '<span class="preview-tag">Entraînement basket</span>'}
            </div>
        `;

        $('#todayCard').onclick = () => {
            $$('.tab')[1].click();
            selectSession(sessionKey);
        };
    } else {
        $('#todayCard').innerHTML = `
            <div class="session-type">
                <span class="session-icon">😴</span>
                <div>
                    <div class="session-name">Jour de repos</div>
                    <div class="session-duration">${dayNames[today]} • Récupération</div>
                </div>
            </div>
            <div class="session-preview">
                <span class="preview-tag">Repos complet</span>
                <span class="preview-tag">Marche légère ok</span>
            </div>
        `;
    }
}

function renderWeekDays() {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Monday

    const dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const phase = state.currentWeek <= 2 ? PROGRAM.phase1 : PROGRAM.phase2;

    let html = '';
    for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);

        const isToday = date.toDateString() === today.toDateString();
        const dateStr = date.toISOString().split('T')[0];
        const isCompleted = state.completedSessions.some(s => s.date === dateStr);

        let icon = '';
        const dayOfWeek = (i + 1) % 7; // 0 = Sunday after Monday-based calculation

        if (state.currentWeek <= 2) {
            if (i === 0) icon = '🦵';
            else if (i === 2) icon = '💪';
            else if (i === 5) icon = '🏀';
            else icon = '🌅';
        } else {
            if (i === 0 || i === 3) icon = '🏀';
            else if (i === 2) icon = '💪';
            else if (i === 5) icon = '🏃';
            else if (i === 1 || i === 4) icon = '🛡️';
            else icon = '😴';
        }

        html += `
            <div class="day-card ${isToday ? 'today' : ''} ${isCompleted ? 'completed' : ''}">
                <span class="day-name">${dayLabels[i]}</span>
                <span class="day-number">${date.getDate()}</span>
                <span class="day-type">${isCompleted ? '✅' : icon}</span>
            </div>
        `;
    }

    $('#weekDays').innerHTML = html;
}

function renderWorkout() {
    // Setup session tabs
    $$('.workout-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            selectSession(tab.dataset.session);
        });
    });

    // Initial render
    selectSession('A');

    // Start workout button
    $('#startWorkoutBtn').onclick = startWorkout;
}

function selectSession(sessionKey) {
    const phase = state.currentWeek <= 2 ? PROGRAM.phase1 : PROGRAM.phase2;
    const session = phase.sessions[sessionKey];

    if (!session) return;

    // Update active tab
    $$('.workout-tab').forEach(t => t.classList.remove('active'));
    $(`.workout-tab[data-session="${sessionKey}"]`).classList.add('active');

    // Store current session
    workoutState.session = session;
    workoutState.sessionKey = sessionKey;

    // Render session info
    $('#sessionInfo').innerHTML = `
        <h2>${session.icon} ${session.name}</h2>
        <p>${session.day}</p>
        <div class="session-meta">
            <span class="meta-item">⏱️ ${session.duration} min</span>
            <span class="meta-item">🔥 ${session.calories} cal</span>
            <span class="meta-item">⚡ +${session.xp} XP</span>
        </div>
    `;

    // Render exercises
    if (session.isBasketTraining) {
        $('#exerciseList').innerHTML = `
            <div class="exercise-item" style="text-align: center; padding: 40px;">
                <div style="font-size: 4rem; margin-bottom: 15px;">🏀</div>
                <h3>Entraînement basket avec l'équipe</h3>
                <p style="color: var(--gray); margin-top: 10px;">
                    N'oublie pas la routine préventive après !
                </p>
            </div>
        `;
        $('#startWorkoutBtn').innerHTML = `
            <span class="btn-icon">✅</span>
            <span class="btn-text">Marquer comme terminé</span>
        `;
    } else {
        let exerciseNum = 1;
        let html = '';

        session.blocks.forEach(block => {
            html += `<div style="margin: 15px 0 10px; color: var(--secondary); font-size: 0.8rem; font-weight: 600; letter-spacing: 1px;">${block.name}</div>`;

            block.exercises.forEach(exercise => {
                html += `
                    <div class="exercise-item" data-exercise='${JSON.stringify(exercise)}'>
                        <div class="exercise-number">${exerciseNum}</div>
                        <div class="exercise-info">
                            <h4>${exercise.name}</h4>
                            <p>${exercise.reps}${exercise.rest ? ` • ${exercise.rest}s repos` : ''}</p>
                        </div>
                        <span class="exercise-badge">${exercise.icon}</span>
                    </div>
                `;
                exerciseNum++;
            });
        });

        $('#exerciseList').innerHTML = html;
        $('#startWorkoutBtn').innerHTML = `
            <span class="btn-icon">▶️</span>
            <span class="btn-text">Démarrer la séance</span>
        `;

        // Add click handlers for exercise details
        $$('.exercise-item').forEach(item => {
            item.addEventListener('click', () => {
                const exercise = JSON.parse(item.dataset.exercise);
                showExerciseDetail(exercise);
            });
        });
    }
}

function showExerciseDetail(exercise) {
    $('#detailIcon').textContent = exercise.icon;
    $('#detailName').textContent = exercise.name;
    $('#detailInstructions').innerHTML = exercise.instructions.map(i => `<li>${i}</li>`).join('');
    $('#detailTips').textContent = exercise.tips || '';

    $('#exerciseDetailModal').classList.remove('hidden');

    $('#closeExerciseDetail').onclick = () => $('#exerciseDetailModal').classList.add('hidden');
    $('#gotItBtn').onclick = () => $('#exerciseDetailModal').classList.add('hidden');
}

function startWorkout() {
    const session = workoutState.session;

    if (session.isBasketTraining) {
        // Just mark as completed
        completeWorkout();
        return;
    }

    // Flatten all exercises
    workoutState.exercises = [];
    session.blocks.forEach(block => {
        block.exercises.forEach(ex => {
            workoutState.exercises.push({ ...ex, block: block.name });
        });
    });

    workoutState.active = true;
    workoutState.currentExerciseIndex = 0;
    workoutState.isPaused = true;
    workoutState.isRest = false;

    // Show workout modal
    $('#workoutModal').classList.remove('hidden');

    // Setup controls
    $('#closeWorkout').onclick = () => {
        if (confirm('Quitter la séance en cours ?')) {
            endWorkout(false);
        }
    };

    $('#playPauseBtn').onclick = togglePause;
    $('#prevExercise').onclick = prevExercise;
    $('#nextExercise').onclick = nextExercise;
    $('#skipBtn').onclick = nextExercise;

    // Render first exercise
    renderCurrentExercise();
}

function renderCurrentExercise() {
    const exercise = workoutState.exercises[workoutState.currentExerciseIndex];
    if (!exercise) {
        completeWorkout();
        return;
    }

    $('#exerciseCounter').textContent = `${workoutState.currentExerciseIndex + 1}/${workoutState.exercises.length}`;
    $('#exercisePhase').textContent = exercise.block;
    $('#exerciseName').textContent = exercise.name;
    $('#exerciseDemo').textContent = exercise.icon;
    $('#exerciseInstructions').textContent = exercise.instructions[0];

    if (exercise.reps) {
        $('.reps-value').textContent = exercise.reps.split(' ')[0];
        $('.reps-label').textContent = exercise.reps.includes('sec') ? 'secondes' : 'répétitions';
    }

    // Setup timer if applicable
    if (exercise.duration) {
        workoutState.timeRemaining = exercise.duration;
        updateTimerDisplay();
        $('#timerSection').style.display = 'flex';
    } else {
        $('#timerSection').style.display = 'none';
    }

    workoutState.isRest = false;
    $('#timerLabel').textContent = 'TRAVAIL';
    updatePlayButton();
}

function togglePause() {
    workoutState.isPaused = !workoutState.isPaused;

    if (!workoutState.isPaused) {
        startTimer();
    } else {
        stopTimer();
    }

    updatePlayButton();
}

function updatePlayButton() {
    $('#playPauseBtn').textContent = workoutState.isPaused ? '▶️' : '⏸️';
}

function startTimer() {
    const exercise = workoutState.exercises[workoutState.currentExerciseIndex];
    if (!exercise || !exercise.duration) return;

    workoutState.timer = setInterval(() => {
        workoutState.timeRemaining--;
        updateTimerDisplay();

        if (workoutState.timeRemaining <= 0) {
            stopTimer();

            if (workoutState.isRest) {
                // Rest finished, move to next exercise
                nextExercise();
            } else if (exercise.rest) {
                // Start rest period
                workoutState.isRest = true;
                workoutState.timeRemaining = exercise.rest;
                $('#timerLabel').textContent = 'REPOS';
                startTimer();
            } else {
                // No rest, move to next
                nextExercise();
            }
        }
    }, 1000);
}

function stopTimer() {
    if (workoutState.timer) {
        clearInterval(workoutState.timer);
        workoutState.timer = null;
    }
}

function updateTimerDisplay() {
    const exercise = workoutState.exercises[workoutState.currentExerciseIndex];
    if (!exercise) return;

    const minutes = Math.floor(workoutState.timeRemaining / 60);
    const seconds = workoutState.timeRemaining % 60;
    $('#timerDisplay').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Update progress circle
    const totalTime = workoutState.isRest ? (exercise.rest || 20) : exercise.duration;
    const progress = (totalTime - workoutState.timeRemaining) / totalTime;
    const circumference = 2 * Math.PI * 45;
    $('#timerProgress').style.strokeDashoffset = circumference * (1 - progress);

    // Change color for rest
    $('#timerProgress').style.stroke = workoutState.isRest ? 'var(--secondary)' : 'var(--primary)';
}

function prevExercise() {
    stopTimer();
    workoutState.isPaused = true;
    if (workoutState.currentExerciseIndex > 0) {
        workoutState.currentExerciseIndex--;
        renderCurrentExercise();
    }
}

function nextExercise() {
    stopTimer();
    workoutState.isPaused = true;
    workoutState.currentExerciseIndex++;

    if (workoutState.currentExerciseIndex >= workoutState.exercises.length) {
        completeWorkout();
    } else {
        renderCurrentExercise();
    }
}

function endWorkout(completed) {
    stopTimer();
    workoutState.active = false;
    $('#workoutModal').classList.add('hidden');
}

function completeWorkout() {
    const session = workoutState.session;

    // Update stats
    state.totalXP += session.xp;
    state.totalWorkouts++;
    state.totalMinutes += session.duration;
    state.totalCalories += session.calories;

    // Update streak
    const today = new Date().toISOString().split('T')[0];
    if (state.lastWorkoutDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (state.lastWorkoutDate === yesterdayStr || !state.lastWorkoutDate) {
            state.currentStreak++;
        } else {
            state.currentStreak = 1;
        }

        state.lastWorkoutDate = today;
        state.bestStreak = Math.max(state.bestStreak, state.currentStreak);
    }

    // Add to completed sessions
    state.completedSessions.push({
        date: today,
        session: session.name,
        xp: session.xp
    });

    // Update weekly progress
    state.weeklyProgress[state.currentWeek - 1]++;

    // Track session types
    if (session.name.includes('Cardio') || session.name.includes('Course')) {
        state.cardioSessions++;
    }
    if (session.name.includes('Renforcement') || session.name.includes('Haut')) {
        state.strengthSessions++;
    }

    // Check time for badges
    const hour = new Date().getHours();
    if (hour < 8) state.earlyWorkout = true;
    if (hour >= 20) state.nightWorkout = true;

    saveState();

    // Check for new badges
    const newBadges = checkNewBadges();

    // Show completion modal
    endWorkout(true);
    showCompletionModal(session, newBadges);

    // Update all displays
    renderHome();
    renderProgress();
    renderProfile();
}

function checkNewBadges() {
    const newBadges = [];

    BADGES.forEach(badge => {
        if (!state.unlockedBadges.includes(badge.id) && badge.condition(state)) {
            state.unlockedBadges.push(badge.id);
            newBadges.push(badge);
        }
    });

    if (newBadges.length > 0) {
        saveState();
    }

    return newBadges;
}

function showCompletionModal(session, newBadges) {
    $('#earnedXP').textContent = `+${session.xp}`;
    $('#sessionDuration').textContent = session.duration;
    $('#sessionCalories').textContent = session.calories;

    if (newBadges.length > 0) {
        $('#newBadges').innerHTML = `
            <h3>🎊 Nouveaux badges !</h3>
            ${newBadges.map(b => `
                <div class="new-badge">
                    ${b.icon} ${b.name}
                </div>
            `).join('')}
        `;
    } else {
        $('#newBadges').innerHTML = '';
    }

    // Create confetti
    createConfetti();

    $('#completionModal').classList.remove('hidden');

    $('#completionBtn').onclick = () => {
        $('#completionModal').classList.add('hidden');
    };
}

function createConfetti() {
    const confetti = $('#confetti');
    confetti.innerHTML = '';

    const colors = ['#FF6B35', '#4ECDC4', '#FFE66D', '#2ECC71', '#E74C3C'];

    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * 2 + 's';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.appendChild(piece);
    }
}

function renderProgress() {
    // Render weekly chart
    const chartHtml = state.weeklyProgress.map((val, i) => {
        const height = Math.max(20, (val / 4) * 100);
        const isActive = i + 1 === state.currentWeek;
        return `
            <div class="chart-bar ${isActive ? 'active' : ''}" style="height: ${height}%">
                <span class="bar-value">${val}</span>
                <span class="bar-label">S${i + 1}</span>
            </div>
        `;
    }).join('');

    $('#weeklyChart').innerHTML = chartHtml;

    // Render badges
    const badgesHtml = BADGES.map(badge => {
        const unlocked = state.unlockedBadges.includes(badge.id);
        return `
            <div class="badge-item ${unlocked ? 'unlocked' : 'locked'}">
                <span class="badge-icon">${badge.icon}</span>
                <span class="badge-name">${badge.name}</span>
            </div>
        `;
    }).join('');

    $('#badgesGrid').innerHTML = badgesHtml;

    // Render history
    const historyHtml = state.completedSessions.slice(-10).reverse().map(s => `
        <div class="history-item">
            <span class="history-icon">✅</span>
            <div class="history-info">
                <h4>${s.session}</h4>
                <p>${new Date(s.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'short' })}</p>
            </div>
            <span class="history-xp">+${s.xp} XP</span>
        </div>
    `).join('');

    $('#historyList').innerHTML = historyHtml || '<p style="color: var(--gray); text-align: center; padding: 20px;">Aucune séance terminée</p>';
}

function renderProfile() {
    // Level calculation
    const level = Math.floor(state.totalXP / 500) + 1;
    const xpInLevel = state.totalXP % 500;
    const xpForNextLevel = 500;
    const progress = (xpInLevel / xpForNextLevel) * 100;

    $('#levelBadge').textContent = `Niv. ${level}`;
    $('#levelFill').style.width = `${progress}%`;
    $('#levelText').textContent = `${xpInLevel} / ${xpForNextLevel} XP`;

    // Stats
    $('#totalWorkouts').textContent = state.totalWorkouts;
    $('#bestStreak').textContent = state.bestStreak;
    $('#totalXP').textContent = state.totalXP;

    // Random tip
    $('#tipCard').innerHTML = `<p>${TIPS[Math.floor(Math.random() * TIPS.length)]}</p>`;
}
