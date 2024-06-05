export interface MyImageProps {
    src: string;
    alt?: string;
    size?: 'primary' | 'large';
    round?: boolean;
    disabled?: boolean;
    [x: string]: any;
  }
  