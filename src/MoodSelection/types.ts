export interface Mood {
  _id: string; // On peut utiliser la date en tant que uniqueID pour l'isntnat
  _rev?: string; // Nécessaire pour la modification dans pouchDb. '?' car n'existe pas avant d'être enregistré dans PouchDB.
  createdAt: string; // Date utilisée pour le uniqueID.
  description: string; // Note laissée par l'utilisateur, peut être facultative (ajouter '?')
  number: number; // Discussion de mood en note/5 ou 10 plutot que texte (si texte changer en string)
  // updatedAt?: string; // Date de la dernière modification. Uncomment si besoin.

  // (Discussion note audio) => Si on attache une note Audio, on rajoute un pouchDB attachment
  /*  _attachments?: {
    [filename: string]: {
      // Le nom de la pièce jointe (par exemple, "moodaudio.webm")
      content_type: string; // Le type MIME du fichier (par exemple, "audio/webm")
      data?: Blob | string; // Le contenu de l'attachement (en base64 ou Blob)
      length?: number; // La taille du fichier en octets
      digest?: string; // Le hash du fichier pour la validation
    };
  }; */
}
