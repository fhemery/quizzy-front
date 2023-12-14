export const fr = {
  appName: "Quizzy",
  header : {
    statusTooltip: {
      ko: 'Le serveur est injoignable',
      partial: 'Le serveur répond, mais pas la base de données',
      ok: 'Le serveur est en ligne !',
      pending: 'Vérification du statut serveur...'
    }
  },
  registerPage: {
    title: 'Inscription',
    username: {
      placeholder: 'Nom d\'utilisateur',
      error : {
        required: 'Le nom d\'utilisateur est requis',
      }
    },
    email: {
      placeholder: 'Adresse email',
      error : {
        required: 'L\'adresse email est requise',
        email: 'L\'adresse email n\'est pas valide'
      }
    },
    password: {
      placeholder: 'Mot de passe',
      error: {
        required: 'Le mot de passe est requis',
        minlength: 'Le mot de passe doit contenir au moins 8 caractères'
      }
    },
    confirmPassword: {
      placeholder: 'Confirmez le mot de passe',
      error: {
        required: 'La confirmation du mot de passe est requise',
      }
    },
    error : {
      passwordsDoNotMatch: 'Les mots de passe ne correspondent pas'
    },
    button: {
      label: 'S\'inscrire',
    },
    login : {
      label: 'Déjà inscrit ?',
      link: 'Connectez-vous !'
    }
  },
  loginPage: {
    title: 'Connexion',
    email: {
      placeholder: 'E-mail*',
      error: {
        required: "L'e-mail est obligatoire",
        email: "L'e-mail n'est pas valide",
      },
    },
    password: {
      placeholder: 'Mot de passe*',
      error: {
        required: 'Le mot de passe est obligatoire',
      },
    },
    button: {
      label: 'Connexion',
    },
    register: {
      label: 'Créer un compte',
    },
    error: {
      loginFailed: 'Email / mot de passe invalide',
    },
    help: {
      text: "Besoin d'aide ?",
      link: 'Contactez-nous',
    },
  },
}
