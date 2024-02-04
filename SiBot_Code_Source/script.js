document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "Microsoft": {
            "Problèmes d'accès": {
                "Je n'arrive pas à accéder à une application": "Assurez-vous que l'application est correctement installée. Redémarrez votre ordinateur et essayez à nouveau.",
                "J'ai un code erreur Windows quand j'essaie de me connecter à Teams, SharePoint...": "Vérifiez si le code d'erreur est connu et reportez-le via GLPI si nécessaire.",
            },
            "Problèmes de performance": {
                "Mon ordinateur est lent": "Vérifiez les programmes en cours d'exécution et fermez ceux qui ne sont pas nécessaires. Considérez un nettoyage de disque ou une défragmentation.",
                "Les applications Office ne fonctionnent pas correctement": "Vérifiez les mises à jour disponibles pour les applications Office et installez-les. Redémarrez l'application après la mise à jour.",
            },
            "Installation de logiciel": {
                "Je ne peux pas installer un logiciel": "Vérifiez que vous avez les droits d'administrateur nécessaires pour l'installation. Assurez-vous également que le logiciel est compatible avec votre version de Windows.",
                "Erreur lors de l'installation d'Office": "Assurez-vous d'avoir une connexion Internet stable et suffisamment d'espace disque. Si le problème persiste, désinstallez toute version antérieure d'Office avant de réessayer.",
            },
            "Mises à jour système": {
                "Impossible de terminer les mises à jour Windows": "Redémarrez votre ordinateur et essayez de relancer les mises à jour. Si le problème persiste, utilisez l'Outil de réparation Windows Update.",
                "Windows Update est bloqué": "Redémarrez votre machine et réessayez. Si cela ne fonctionne pas, utilisez l'utilitaire de résolution des problèmes de Windows Update.",
            },
        },
        "Odoo": {
            "Accès à Odoo": {
                "Je n'arrive pas à accéder à Odoo": "Vérifiez votre connexion internet et les paramètres de votre navigateur. Essayez d'accéder à Odoo avec un autre navigateur.",
                "Comment réinitialiser mon mot de passe Odoo ?": "Utilisez la fonction 'Mot de passe oublié' sur la page de connexion pour réinitialiser votre mot de passe.",
                "Problèmes de performance dans Odoo": "Vérifiez l'état du serveur Odoo. Si tout semble normal, essayez de vider le cache de votre navigateur.",
            },
            "Intégration de données": {
                "Problèmes d'importation de données dans Odoo": "Vérifiez le format et la structure des données. Assurez-vous que les champs correspondent à ceux d'Odoo.",
                "Exportation de données depuis Odoo": "Vérifiez les droits d'accès aux données que vous essayez d'exporter. Utilisez le format de fichier approprié.",
            },
            "Problèmes de module": {
                "Un module Odoo ne fonctionne pas correctement": "Vérifiez que le module est bien configuré. Si le problème persiste, consultez la documentation du module ou contactez le support technique.",
                "Erreur lors de l'installation d'un module": "Assurez-vous que le module est compatible avec votre version d'Odoo. Vérifiez également les dépendances requises pour le module.",
            },
            "Gestion des utilisateurs": {
                "Impossible de créer un nouvel utilisateur dans Odoo": "Vérifiez que vous avez les droits d'administrateur nécessaires pour créer des utilisateurs. Si le problème persiste, vérifiez les logs du serveur.",
                "Un utilisateur ne peut pas se connecter à Odoo": "Vérifiez si l'utilisateur a les bons identifiants et si son compte n'est pas désactivé ou restreint.",
            },
        },
        "Réseau": {
            "Connectivité": {
                "Je n'ai plus internet": "Vérifiez la connexion de votre câble Ethernet ou la force du signal Wi-Fi. Redémarrez votre routeur.",
                "Je n'ai plus accès à mes applications depuis un accès extérieur": "Vérifiez si votre VPN est actif et fonctionne correctement.",
                "La vitesse de ma connexion internet est lente": "Effectuez un test de vitesse internet. Si le résultat est inférieur à celui attendu, redémarrez votre modem/routeur.",
            },
            "Problèmes VPN": {
                "VPN ne se connecte pas": "Vérifiez vos identifiants de connexion et votre connexion Internet. Si le problème persiste, contactez votre administrateur réseau.",
                "Baisse de vitesse avec VPN": "Essayez de changer de serveur VPN ou vérifiez si votre bande passante Internet est limitée.",
            },
            "Problèmes de serveur": {
                "Le serveur ne répond pas": "Vérifiez l'état du serveur via les outils de monitoring. Si tout semble normal, essayez de redémarrer le serveur.",
                "Perte de connexion avec le serveur": "Assurez-vous que votre connexion réseau est stable. Si le problème persiste, contactez l'équipe de maintenance du serveur.",
            },
            "Configuration réseau": {
                "Je ne peux pas configurer mon adresse IP": "Assurez-vous d'avoir les droits nécessaires pour modifier les paramètres réseau. Utilisez le guide de configuration IP de votre système d'exploitation.",
                "Problème de DNS": "Essayez de vider le cache DNS de votre système ou de changer de serveur DNS pour tester la connectivité.",
            },
        },
        "Système": {
            "Erreurs fréquentes": {
                "Mon ordinateur freeze/bug": "Redémarrez votre ordinateur. Vérifiez que votre disque de mémoire principal (C:) n'est pas surchargé.",
                "J'obtiens un écran bleu": "Notez le code d'erreur et effectuez une recherche pour déterminer les étapes de dépannage.",
                "Mon ordinateur redémarre tout seul": "Vérifiez les mises à jour système en attente et installez-les. Assurez-vous également que votre système est à jour avec les derniers correctifs de sécurité.",
            },
            "Mises à jour": {
                "Échec de la mise à jour Windows": "Redémarrez votre ordinateur et essayez la mise à jour via Windows Update. Si le problème persiste, utilisez l'outil de résolution des problèmes de Windows Update.",
                "Comment retarder une mise à jour Windows": "Allez dans Paramètres > Mise à jour et sécurité > Options avancées, et choisissez comment retarder les mises à jour.",
            },
            "Problèmes de démarrage": {
                "Mon ordinateur ne démarre pas": "Vérifiez si le problème est lié à l'alimentation électrique. Si le problème persiste, essayez de démarrer en mode sans échec.",
                "Écran noir au démarrage": "Vérifiez si l'écran est correctement connecté. Si le problème persiste, redémarrez votre ordinateur en mode sans échec et vérifiez les pilotes de votre carte graphique.",
            },
            "Gestion de l'alimentation": {
                "L'ordinateur s'éteint de manière inattendue": "Vérifiez les paramètres de gestion de l'alimentation et assurez-vous que l'ordinateur n'est pas configuré pour s'éteindre après une certaine période d'inactivité.",
                "Problème de mode veille": "Assurez-vous que tous les pilotes, en particulier ceux de la carte graphique, sont à jour. Réinitialisez les paramètres d'alimentation si nécessaire.",
            },
        },
        "Sécurité": {
            "Problèmes de virus/malware": {
                "Je pense que mon ordinateur est infecté par un virus": "Lancez une analyse complète avec votre logiciel antivirus. Ne téléchargez pas de fichiers suspects et ne visitez pas de sites web non sécurisés.",
                "Des pop-ups suspects apparaissent sur mon écran": "Effectuez une analyse antivirus et assurez-vous que votre navigateur est à jour avec les derniers correctifs de sécurité.",
            },
            "Phishing et escroqueries en ligne": {
                "Je pense avoir reçu un email de phishing": "Ne cliquez sur aucun lien et ne téléchargez pas de pièces jointes de l'email. Signalez-le comme phishing à votre équipe de sécurité informatique.",
                "Comment reconnaître un site web d'escroquerie": "Vérifiez l'URL du site. Méfiez-vous des sites avec des fautes d'orthographe ou un certificat de sécurité invalide. Utilisez des outils de vérification de site web si nécessaire.",
            },
            "Gestion des accès": {
                "Je ne peux pas me connecter à mon compte utilisateur": "Vérifiez que votre nom d'utilisateur et votre mot de passe sont corrects. Si vous ne pouvez toujours pas vous connecter, contactez votre administrateur système.",
                "Suspicion de compromission de compte": "Changez immédiatement votre mot de passe et informez votre équipe de sécurité informatique.",
            },
            "Mises à jour de sécurité": {
                "Comment vérifier les mises à jour de sécurité sur mon ordinateur": "Allez dans Paramètres > Mise à jour et sécurité > Windows Update, et vérifiez les mises à jour disponibles.",
                "Le système n'installe pas les mises à jour de sécurité": "Assurez-vous d'avoir une connexion Internet stable. Redémarrez votre ordinateur et réessayez. Si le problème persiste, contactez le support technique.",
            },
            "Prévention des intrusions": {
                "Suspicion d'accès non autorisé à mon ordinateur": "Changez vos mots de passe immédiatement et vérifiez les journaux de sécurité. Informez votre équipe de sécurité informatique.",
                "Comment configurer un pare-feu sur mon ordinateur": "Accédez au Panneau de configuration > Système et sécurité > Pare-feu Windows, et configurez les paramètres selon les directives de votre organisation.",
            },
            "Gestion des incidents": {
                "Que faire en cas de violation de données": "Signalez immédiatement l'incident à votre équipe de sécurité. Ne modifiez ni ne supprimez aucune donnée suspecte jusqu'à ce que l'équipe d'intervention en cas d'incident ait donné des instructions.",
                "Détection de logiciel malveillant sur l'ordinateur": "Déconnectez votre ordinateur du réseau et exécutez un scan antivirus complet. Signalez l'incident à votre équipe de sécurité informatique.",
            },
        },
        "Matériel": {
            "Maintenance du matériel": {
                "Mon ordinateur surchauffe": "Assurez-vous que les ventilateurs de votre ordinateur fonctionnent correctement et que les orifices d'aération ne sont pas obstrués.",
                "La batterie de mon ordinateur portable ne charge pas": "Vérifiez l'état du chargeur et des connexions. Si le problème persiste, la batterie peut nécessiter un remplacement.",
            },
            "Problèmes de périphériques": {
                "Mon imprimante ne fonctionne pas": "Vérifiez que l'imprimante est correctement connectée et allumée. Assurez-vous que les pilotes de l'imprimante sont à jour.",
                "Mon écran affiche des couleurs incorrectes": "Vérifiez les câbles de connexion de l'écran. Essayez de réinitialiser les paramètres d'affichage à leurs valeurs par défaut.",
            },
            "Problèmes de disque dur": {
                "Mon disque dur n'est pas reconnu": "Vérifiez la connexion du disque dur. Si connecté via USB, essayez un autre port ou câble USB. Vous pouvez aussi essayer d'aller sur le gestionnaire de périphérique et appuyer sur 'rechercher des modifications sur matériel', ça rechargera vos composants, y compris les ports USB ",
                "Mon disque dur fait du bruit": "Cela peut indiquer un dysfonctionnement mécanique. Sauvegardez vos données immédiatement et consultez un spécialiste.",
            },
            "Problèmes d'audio": {
                "Pas de son sur mon ordinateur": "Vérifiez si le périphérique audio est correctement configuré comme périphérique de sortie. Assurez-vous que les pilotes audio sont à jour.",
                "Distorsion ou bruit dans le son": "Vérifiez les connexions de vos haut-parleurs ou de votre casque. Essayez de mettre à jour ou de réinstaller les pilotes audio.",
            },
        },
        "Applications tierces": {
            "Problèmes avec les navigateurs web": {
                "Mon navigateur web se ferme de manière inattendue": "Vérifiez les mises à jour du navigateur ou essayez de réinitialiser les paramètres du navigateur à leurs valeurs par défaut.",
                "Je ne peux pas accéder à certains sites web": "Vérifiez votre connexion Internet et les paramètres de sécurité du navigateur. Essayez de désactiver temporairement le bloqueur de publicités ou le VPN.",
            },
            "Problèmes de logiciels": {
                "Un logiciel ne se lance pas": "Vérifiez que votre système répond aux exigences minimales du logiciel. Essayez de réinstaller le logiciel.",
                "Mise à jour d'une application tierce échoue": "Vérifiez votre connexion Internet et l'espace disque disponible. Redémarrez votre ordinateur et réessayez la mise à jour.",
            },
        },
    };
    
    const conversationArea = document.getElementById('conversation-area');

    function checkScrollbar() {
        const conversationArea = document.querySelector('.conversation-area');
        const hasScrollbar = conversationArea.scrollHeight > conversationArea.clientHeight;
    
        if (hasScrollbar) {
            conversationArea.classList.add('conversation-area-scrollbar');
        } else {
            conversationArea.classList.remove('conversation-area-scrollbar');
        }
    }
    
    checkScrollbar();
    
    function typeMessage(text, type, callback) {
        let i = 0;
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${type}`;
        conversationArea.appendChild(messageDiv);
    
        function typing() {
            if (i < text.length) {
                messageDiv.textContent += text.charAt(i);
                i++;
                setTimeout(typing, 17); // Délai entre chaque lettre : ex 15
            } else {
                messageDiv.scrollIntoView({ behavior: 'smooth' }); // Défilement automatique
                if (callback) {
                    callback();
                }
            }
        }
    
        typing();

    checkScrollbar();
        return messageDiv;
    }
    
    function clearOptions() {
        const options = document.querySelectorAll('.message-option, .message-suboption');
        options.forEach(option => option.remove());
    }

    function clearSubOptions() {
        const subOptions = document.querySelectorAll('.message-suboption');
        subOptions.forEach(subOption => subOption.remove());
    }

    function displayMainOptions() {
        clearMessages();
        typeMessage('Bienvenue, quelle est votre question ?', 'welcome', () => {
            Object.keys(data).forEach(category => {
                const optionDiv = typeMessage(category, 'option');
                optionDiv.addEventListener('click', () => displaySubOptions(category));
            });
        });
    }

    function clearSelectedMessages() {
        // efface messages de catégorie et sous-catégorie sélectionnés
        const selectedMessages = document.querySelectorAll('.message-selected');
        selectedMessages.forEach(msg => msg.remove());
    }

    function clearFinalMessages() {
        const finalMessages = document.querySelectorAll('.message-answer, .message-final, .link, .message-restart');
        finalMessages.forEach(msg => msg.remove());
    }
    
    function addBackButton(callback, clearSelected, clearFinal) {
    // Supprime bouton existant pour éviter doublons
    const existingBackButton = document.querySelector('.message-back-button');
    if (existingBackButton) {
        existingBackButton.remove();
    }

    const backButtonDiv = typeMessage('Revenir en arrière', 'back-button');
    backButtonDiv.className += ' message-back-button'; 
    backButtonDiv.addEventListener('click', () => {
        if (clearSelected) {
            clearSelectedMessages(); 
        }
        if (clearFinal) {
            clearFinalMessages(); 
        }
        callback();
    });
}

    
    function displaySubOptions(category) {
        clearOptions();
        const selectedCategoryDiv = typeMessage(category, 'selected');
        selectedCategoryDiv.addEventListener('click', () => displayMainOptions());
    
        addBackButton(() => displayMainOptions());
    
        Object.keys(data[category]).forEach(subCategory => {
            const subCategoryDiv = typeMessage(subCategory, 'suboption');
            subCategoryDiv.addEventListener('click', () => {
                clearSubOptions();
                const selectedSubCategoryDiv = typeMessage(subCategory, 'selected');
                addBackButton(() => displaySubOptions(category));
                displayQuestions(category, subCategory, selectedSubCategoryDiv);
            });
        });
    }
    
    function displayQuestions(category, subCategory, selectedSubCategoryDiv) {
        selectedSubCategoryDiv.scrollIntoView({ behavior: "smooth" });
        addBackButton(() => {
            clearSubOptions();
            displaySubOptions(category);
        }, true, true); 
    
        Object.keys(data[category][subCategory]).forEach(question => {
            const questionDiv = typeMessage(question, 'suboption');
            questionDiv.addEventListener('click', () => {
                clearSubOptions(); 
                displayFinalMessage(data[category][subCategory][question], category, question);
            });
        });
    }
    
const { exec } = require('child_process');
const { shell } = require('electron'); 

function displayFinalMessage(answer, category, question) {
    clearSubOptions();
    typeMessage(question, 'selected', () => {
        typeMessage(answer, 'answer', () => {
            const finalMessageDiv = typeMessage("Si vous n'avez pas trouvé de solution à votre problème, merci d'ouvrir un ticket GLPI en appuyant sur l'onglet de redirection ci-dessous :", 'final');

            const linkDiv = document.createElement('a');
            linkDiv.href = '#';
            linkDiv.className = 'link';
            linkDiv.textContent = 'Ouvrir un ticket';
            linkDiv.addEventListener('click', (event) => {
                event.preventDefault();
                openURLInBrowser('https://glpi-project.org/fr/'); // mettre l'url de votre support entre ''
            });

            conversationArea.appendChild(linkDiv); 
            typeMessage("Une autre question ?", 'restart').addEventListener('click', displayMainOptions);
        });
    });
}

function openURLInBrowser(url) {
    exec(`firefox "${url}"`, (error) => {
        if (error) {
            exec(`msedge "${url}"`, (error) => {
                if (error) {
                    exec(`chrome "${url}"`, (error) => {
                        if (error) {
                            shell.openExternal(url);
                        }
                    });
                }
            });
        }
    });
}


    function clearMessages() {
        conversationArea.innerHTML = '';
    }

    displayMainOptions();
});

/*
#####################################
#  .-. .-')       (`-.   _  .-')    #
#  \  ( OO )    _(OO  )_( \( -O )   #
#  ,--. ,--.,--(_/   ,. \,------.   #
#  |  .'   /\   \   /(__/|   /`. '  #
#  |      /, \   \ /   / |  /  | |  #
#  |     ' _) \   '   /, |  |_.' |  #
#  |  .   \    \     /__)|  .  '.'  #
#  |  |\   \    \   /    |  |\  \   #
#  `--' '--'     `-'     `--' '--'  #
#####################################
*/