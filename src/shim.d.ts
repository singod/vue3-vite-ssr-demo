declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/options' {
  interface ComponentOptions {
    [propName: string]: any;
    asyncData?: any;
  }
}
