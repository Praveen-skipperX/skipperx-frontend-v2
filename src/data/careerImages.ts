// Image references and crop transforms from the local FigmaVault raw nodes.
import type { CSSProperties } from "react";
import type { TrackKey } from "./programs";
export type CareerImage = { nodeId: string; src: string; style?: CSSProperties };
export const CAREER_IMAGES = {
  "picker": {
    "entrepreneurs": {
      "nodeId": "I1046:3542;1021:4937",
      "src": "/career-paths/cache/a55113764a71c718a083276b.png"
    },
    "innovators": {
      "nodeId": "I1046:3542;1021:4920",
      "src": "/career-paths/cache/f8017d3e4900bd2727c4745b.png",
      "style": {
        "position": "absolute",
        "width": "100%",
        "height": "350.2993855067453%",
        "maxWidth": "none",
        "objectFit": "fill",
        "left": "3.839484229683876%",
        "top": "-54.27196575098705%"
      }
    },
    "hustlers": {
      "nodeId": "I1046:3542;1021:4903",
      "src": "/career-paths/cache/0d5d6ff75cfd258c5fdcc382.png"
    }
  },
  "hero": {
    "entrepreneurs": {
      "nodeId": "1056:2874",
      "src": "/career-paths/cache/a55113764a71c718a083276b.png"
    },
    "innovators": {
      "nodeId": "1435:3529",
      "src": "/career-paths/cache/57119b673164c51bfd135437.png",
      "style": {
        "position": "absolute",
        "width": "108.6722964543634%",
        "height": "596.6292499440567%",
        "maxWidth": "none",
        "objectFit": "fill",
        "left": "-3.9140445070705714%",
        "top": "-107.50499577658287%"
      }
    },
    "hustlers": {
      "nodeId": "1439:4732",
      "src": "/career-paths/cache/0f96bc884c636170c84e9556.png",
      "style": {
        "position": "absolute",
        "width": "101.70657149845975%",
        "height": "686.6199137878907%",
        "maxWidth": "none",
        "objectFit": "fill",
        "left": "-1.7065724456760107%",
        "top": "-253.10936860695242%"
      }
    }
  },
  "programs": {
    "entrepreneurs": [
      {
        "nodeId": "1100:4060",
        "src": "/career-paths/cache/a55113764a71c718a083276b.png"
      },
      {
        "nodeId": "1100:4146",
        "src": "/career-paths/cache/9fb8a64334e9eddf5c84f46b.png"
      },
      {
        "nodeId": "1100:4208",
        "src": "/career-paths/cache/bf8a2e82a3d5eb8402304fa8.png",
        "style": {
          "position": "absolute",
          "width": "109.83060629353939%",
          "height": "243.45784926326544%",
          "maxWidth": "none",
          "objectFit": "fill",
          "left": "0%",
          "top": "-60.833332124065116%"
        }
      },
      {
        "nodeId": "1100:4239",
        "src": "/career-paths/cache/678fdaee78664af135b664c2.png"
      },
      {
        "nodeId": "1100:5038",
        "src": "/career-paths/cache/8da030540404722aeb28103e.png"
      }
    ],
    "innovators": [
      {
        "nodeId": "1437:3651",
        "src": "/career-paths/cache/43e9524603d11ed1352aa30f.png",
        "style": {
          "position": "absolute",
          "width": "121.06355310928434%",
          "height": "478.8946259848869%",
          "maxWidth": "none",
          "objectFit": "fill",
          "left": "-0.03041795670190023%",
          "top": "-107.12708741220116%"
        }
      },
      {
        "nodeId": "1437:3561",
        "src": "/career-paths/cache/75d6551735a9f73cb59bdfc4.png",
        "style": {
          "position": "absolute",
          "width": "100%",
          "height": "295.3125089385142%",
          "maxWidth": "none",
          "objectFit": "fill",
          "left": "0.023818539921194315%",
          "top": "-68.1872283956827%"
        }
      },
      {
        "nodeId": "1437:3680",
        "src": "/career-paths/cache/bede915733494e59378ea280.png"
      },
      {
        "nodeId": "1437:3768",
        "src": "/career-paths/cache/afea090947db43bffc2ce2f6.png",
        "style": {
          "position": "absolute",
          "width": "105.39682332272196%",
          "height": "233.6296312697336%",
          "maxWidth": "none",
          "objectFit": "fill",
          "left": "-1.11111114601189%",
          "top": "-21.17242318795413%"
        }
      }
    ],
    "hustlers": [
      {
        "nodeId": "1439:4762",
        "src": "/career-paths/cache/c91dad08d1cbbe0cefc5b795.png"
      },
      {
        "nodeId": "1439:4763",
        "src": "/career-paths/cache/def87d1719242b4de0c735d5.png"
      }
    ]
  }
} satisfies { picker: Record<TrackKey, CareerImage>; hero: Record<TrackKey, CareerImage>; programs: Record<TrackKey, CareerImage[]> };
