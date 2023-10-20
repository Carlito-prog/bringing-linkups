/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // more env variables...
    readonly VITE_AWS_ACCESS_KEY_ID: string
    readonly VITE_AWS_SECRET_ACCESS_KEY: string
    readonly VITE_AWS_BUCKET_NAME: string

  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }