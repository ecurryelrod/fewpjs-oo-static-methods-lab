class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/([^A-Za-z0-9 '-])/g, '');
  }

  static titleize(sentence) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let titleized = [];
    let arrayOfWords = sentence.split( " " );
    for ( let i = 0; i < arrayOfWords.length; i++ ) {
      if (i === 0) {
        titleized.push(this.capitalize(arrayOfWords[i]));
      } else {
        if (exceptions.includes(arrayOfWords[i])) {
          titleized.push(arrayOfWords[i]);
        } else {
          titleized.push(this.capitalize(arrayOfWords[i]));
        }
      }
    }
    return titleized.join(' ');
  }
}