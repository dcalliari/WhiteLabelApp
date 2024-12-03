import casasBahia from "./casasBahia.json";
import magazineLuiza from "./magazineLuiza.json";
import images from "./images";

type BrandKeys = keyof typeof brands;

const brands = { casasBahia, magazineLuiza };
const activeBrand: BrandKeys = (process.env.EXPO_PUBLIC_BRAND as BrandKeys) || "casasBahia";

const brandConfig = brands[activeBrand];
const brandImages = images[activeBrand];

const config = {
  ...brandConfig,
  images: brandImages,
};

export default config;