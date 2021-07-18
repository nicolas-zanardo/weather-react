# Weather  Openweathermap

---

## Exercice :

Le but est de faire une mini app en react, de deux pages. L'app peut être un site web en react.

- Première page : La première page contient un champ de texte permettant à l'utilisateur d'écrire le nom d'une ville, et de valider son choix
- Seconde page : La seconde page doit afficher "Il fait froid" si la température dans la ville en question est < à 15°C, et "Il fait chaud" si la température est ≥ 15°C. 
  
La couleur du fond d'écran doit aussi changer en fonction de cette température : couleur froide s'il fait froid, chaude s'il fait chaud.

### Ressources :

L'API à utiliser pour connaître la température sera [https://openweathermap.org/](https://openweathermap.org/)

### Contraintes :

- La fonctionnalité pour connaître la température sera faite avec une "hook", en imaginant qu'elle pourrait être réutilisée ailleurs.
- L'utilisation de TypeScript  est un plus et fortement recommandé.

---

## MISE EN PLACE DE L'APPLICATION

1 - Creer un fichier env.openweathermap.tsx dans le fichier env
un fichier env.EXEMPLE.tsx est déjà present pour avoir un exemple

```TypeScript
/**
 * @class EnvEXEMPLE
 * @description configuration file for api
 */
export default class EnvEXEMPLE {

    protected readonly appid: string = "YOUT_KEY";
    protected readonly unitsMetric: string = "metric";
    protected readonly langFr: string = "fr";

}
```

2 - Ligne de Commande :

 ```Bash
 npm install
 npm start 
 ```

3 - Si TypeScript n'est pas installé 

```Bash
sudo npm install -g typescript
```