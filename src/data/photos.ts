import type { Photo } from "@/types/content";

const CC_BY_SA_4 = "https://creativecommons.org/licenses/by-sa/4.0/";
const CC0 = "https://creativecommons.org/publicdomain/zero/1.0/";
const PD_MARK = "https://creativecommons.org/publicdomain/mark/1.0/";

export const photos: Photo[] = [
  {
    id: "maasim-iml-ecopark-panorama",
    src: "/images/photos/maasim-iml-ecopark-panorama.jpg",
    width: 1920,
    height: 785,
    alt: "Coconut-covered hills sloping down to the turquoise water of Sarangani Bay, with a winding road and a pond in the valley below",
    caption: "Hillside view toward Sarangani Bay from IML Ecopark",
    location: "Maasim, Sarangani",
    takenInMaasim: true,
    credit: {
      author: "Michael E. Peligro",
      license: "CC BY-SA 4.0",
      licenseUrl: CC_BY_SA_4,
      sourceUrl: "https://commons.wikimedia.org/wiki/File:IML_panorama_01.jpg",
    },
  },
  {
    id: "maasim-bay-4ml-strand",
    src: "/images/photos/maasim-bay-4ml-strand.jpg",
    width: 1920,
    height: 1200,
    alt: "A bamboo footbridge leading through shoreline trees to a stilted hut, with the calm bay and distant mountains beyond",
    caption: "Sarangani Bay from the 4ML Strand beach resort, 2009",
    location: "Maasim, Sarangani",
    takenInMaasim: true,
    credit: {
      author: "Michael E. Peligro",
      license: "CC BY-SA 4.0",
      licenseUrl: CC_BY_SA_4,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:View_of_Sarangani_Bay_at_4ML_Strand_beach_resort.jpg",
    },
  },
  {
    id: "maasim-iml-ecopark-hills",
    src: "/images/photos/maasim-iml-ecopark-hills.jpg",
    width: 1920,
    height: 723,
    alt: "Green hills planted with bananas and coconut palms under a wide blue sky, with mountain ridges in the distance",
    caption: "The hilly range behind IML Ecopark",
    location: "Maasim, Sarangani",
    takenInMaasim: true,
    credit: {
      author: "Michael E. Peligro",
      license: "CC BY-SA 4.0",
      licenseUrl: CC_BY_SA_4,
      sourceUrl: "https://commons.wikimedia.org/wiki/File:IML_panorama_03.jpg",
    },
  },
  {
    id: "maasim-municipal-hall",
    src: "/images/photos/maasim-municipal-hall.jpg",
    width: 1920,
    height: 2560,
    alt: "The Maasim municipal hall building",
    caption: "Maasim Municipal Hall, 2018",
    location: "Poblacion, Maasim, Sarangani",
    takenInMaasim: true,
    credit: {
      author: "MarkoDalisay",
      license: "CC BY-SA 4.0",
      licenseUrl: CC_BY_SA_4,
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Maasim_Municipal_Hall.jpg",
    },
  },
  {
    id: "sarangani-bay-seascape",
    src: "/images/photos/sarangani-bay-seascape-1.jpg",
    width: 1920,
    height: 970,
    alt: "Clear shallow water over a rocky shore, with a stone path under overhanging branches and a calm horizon",
    caption: "Sarangani Bay Protected Seascape, seen from the Glan side of the bay",
    location: "Gumasa, Glan, Sarangani",
    takenInMaasim: false,
    credit: {
      author: "Michael E. Peligro",
      license: "CC BY-SA 4.0",
      licenseUrl: CC_BY_SA_4,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Sarangani_bay_protected_seascape_1.jpg",
    },
  },
  {
    id: "sarangani-bay-seascape-rocks",
    src: "/images/photos/sarangani-bay-seascape-3.jpg",
    width: 1920,
    height: 1052,
    alt: "Rocky coastline and clear water of Sarangani Bay under a bright sky",
    caption: "Sarangani Bay Protected Seascape, Glan side of the bay",
    location: "Gumasa, Glan, Sarangani",
    takenInMaasim: false,
    credit: {
      author: "Michael E. Peligro",
      license: "CC BY-SA 4.0",
      licenseUrl: CC_BY_SA_4,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Sarangani_Bay_protected_seascape_3.jpg",
    },
  },
  {
    id: "sarangani-bay-mangroves",
    src: "/images/photos/sarangani-bay-mangroves.jpg",
    width: 1920,
    height: 1280,
    alt: "Old mangrove trees arching over a pale beach, their breathing roots standing up from the sand",
    caption: "Mangroves on a beach along Sarangani Bay",
    location: "Sarangani Bay",
    takenInMaasim: false,
    credit: {
      author: "Gary Todd",
      license: "Public domain",
      licenseUrl: PD_MARK,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Mangrove_Trees_on_Sarangani_Bay_The_Two_Have_Become_One_(51862487542).jpg",
    },
  },
  {
    id: "sarangani-bay-roots",
    src: "/images/photos/sarangani-bay-beach.jpg",
    width: 1920,
    height: 1280,
    alt: "A tangle of mangrove prop roots over coral rubble and sand at low tide",
    caption: "Mangrove roots at low tide on Sarangani Bay",
    location: "Sarangani Bay",
    takenInMaasim: false,
    credit: {
      author: "Gary Todd",
      license: "CC0",
      licenseUrl: CC0,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Phil_Florencia_Beach,_Sarangani_Bay.jpg",
    },
  },
  {
    id: "sarangani-bay-fishing-boat",
    src: "/images/photos/sarangani-bay-fishing-boat.jpg",
    width: 1920,
    height: 1280,
    alt: "A teal outrigger fishing boat on deep blue water, with hazy mountains behind",
    caption: "Outrigger fishing boat on Sarangani Bay",
    location: "Sarangani Bay, near General Santos City",
    takenInMaasim: false,
    credit: {
      author: "Gary Todd",
      license: "CC0",
      licenseUrl: CC0,
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Fishing_Boat_(24714156692).jpg",
    },
  },
  {
    id: "sarangani-bay-boat",
    src: "/images/photos/sarangani-bay-boat.jpg",
    width: 1920,
    height: 1280,
    alt: "A small boat on the open water of Sarangani Bay",
    caption: "A boat on Sarangani Bay",
    location: "Sarangani Bay",
    takenInMaasim: false,
    credit: {
      author: "Gary Todd",
      license: "CC0",
      licenseUrl: CC0,
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Boat_in_Bay_(10604359465).jpg",
    },
  },
  {
    id: "sarangani-sunset-glan",
    src: "/images/photos/sarangani-sunset-glan.jpg",
    width: 1920,
    height: 865,
    alt: "The sun setting through heavy clouds over the sea, with outrigger boats and a palm-covered headland",
    caption: "Sunset on the coast of Glan, Sarangani",
    location: "Glan, Sarangani",
    takenInMaasim: false,
    credit: {
      author: "Rjugo",
      license: "CC BY-SA 4.0",
      licenseUrl: CC_BY_SA_4,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Sunset_at_Glan_Sarangani_Province.jpg",
    },
  },
  {
    id: "blaan-mat-weaving",
    src: "/images/photos/blaan-mat-weaving.jpg",
    width: 1920,
    height: 3126,
    alt: "A rolled sleeping mat woven in vivid natural-dye patterns",
    caption:
      "Igem silel sleeping mat by B'laan master weaver Estelita Bantilan, shown at a 2024 national crafts fair",
    location: "Crafts fair, Metro Manila",
    takenInMaasim: false,
    credit: {
      author: "Valenzuela400",
      license: "CC BY-SA 4.0",
      licenseUrl: CC_BY_SA_4,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Estelita_Bantilan_Igem_Silel_Blaan_sleeping_mat_weavingB.jpg",
    },
  },
  {
    id: "blaan-mouth-harp",
    src: "/images/photos/blaan-mouth-harp.jpg",
    width: 384,
    height: 576,
    alt: "A B'laan woman playing a bamboo mouth harp",
    caption: "A B'laan musician playing the mouth harp, Sarangani, 2014",
    location: "Sarangani",
    takenInMaasim: false,
    credit: {
      author: "Rizalninoynapoleon",
      license: "CC BY-SA 4.0",
      licenseUrl: CC_BY_SA_4,
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Blaan_women_music.jpg",
    },
  },
];

const photoMap = new Map(photos.map((photo) => [photo.id, photo]));

export function getPhoto(id: string | undefined): Photo | undefined {
  return id ? photoMap.get(id) : undefined;
}
