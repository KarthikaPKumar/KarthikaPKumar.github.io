// Kathy’s verified career and portfolio content. Visual template attribution: see ATTRIBUTION.md.

export type Palette = { from:string; via:string; to:string; accent:string };
export type Metric = {value:string;label:string};
export type Project = {id:string;title:string;year:string;genre:string;logline:string;stack:string[];build:string[];features:string[];metrics:Metric[];github?:string;live?:string;limits?:string;palette:Palette;motif:'shield'|'flow'|'tenants'};
export type Achievement = {id:string;title:string;org:string;detail:string;laurel:string;link?:string};
export type Certification = {issuer:string;name:string;link:string};
export type Skill = {name:string;mono:string;note?:string};
export type SkillCategory = {id:string;title:string;subtitle:string;skills:Skill[]};
export type Episode = {code:string;title:string;description:string;tags:string[];runtime:string;palette:Palette};
export type Season = {number:number;title:string;period:string;synopsis:string;episodes:Episode[]};
export type TopPick = {label:string;title:string;detail:string;palette:Palette};
export type IntroSlide = {kicker:string;title:string;lines:string[];chips?:string[]};
export type ProfileId = 'kathy'|'recruiter'|'developer'|'creative';
export type SectionId = 'about'|'journey'|'originals'|'picks'|'skills'|'moments'|'story';

const crimson: Palette = {"from": "#24060b", "via": "#6e0d1d", "to": "#09070a", "accent": "#ff3d5a"};
const amber: Palette = {"from": "#1c1003", "via": "#6b3c06", "to": "#0a0806", "accent": "#ffb547"};
const ocean: Palette = {"from": "#04121f", "via": "#0f4c6e", "to": "#05080d", "accent": "#4cc9ff"};
const violet: Palette = {"from": "#120822", "via": "#3d1a6e", "to": "#07060c", "accent": "#b98bff"};
const jade: Palette = {"from": "#03150f", "via": "#0d5a40", "to": "#050a08", "accent": "#46e3a8"};
export const profile = {
  "fullName": "Karthika Pillai Kumar",
  "displayName": "Kathy",
  "firstName": "KATHY",
  "seriesTag": "THE SERIES",
  "originalLabel": "A KATHY ORIGINAL",
  "role": "Data Science · ML Engineering · Analytics Engineering",
  "tagline": [
    "Data Science",
    "ML Engineering",
    "Analytics Engineering"
  ],
  "intro": "A Master of Data Science student at Monash with software engineering experience at IBM. I build predictive models, reliable data pipelines and applications that turn complex data into something people can use.",
  "location": "Melbourne, Australia",
  "email": "karthikapillai@gmail.com",
  "links": {
    "linkedin": "https://www.linkedin.com/in/karthikapillaikumar/",
    "github": "https://github.com/KarthikaPKumar"
  },
  "resumePdf": "",
  "portrait": {
    "src": "/kathy/revamp/assets/kathy-cutout.png",
    "srcSet": "",
    "alt": "Portrait of Kathy"
  },
  "interests": [
    "Predictive modelling",
    "Reliable data systems",
    "Applied AI"
  ]
};
export const education = [
  {
    "school": "Monash University",
    "place": "Melbourne",
    "degree": "Master of Data Science",
    "period": "2025 – 2026",
    "score": "Postgraduate study"
  },
  {
    "school": "TKM College of Engineering",
    "place": "India",
    "degree": "B.Tech (Honours), Computer Science Engineering",
    "period": "",
    "score": "Honours"
  }
];
export const experience = [
  {
    "company": "IBM India Software Labs",
    "role": "Software Developer",
    "place": "India",
    "period": "August 2022 – January 2025",
    "points": [
      "Worked on the Presto data platform within watsonx.data across security, performance monitoring and developer tooling.",
      "Contributed audit logging, automated security checks and caching improvements.",
      "Built Python tools to streamline quality assurance."
    ]
  },
  {
    "company": "Junior Engineers",
    "role": "Coding Instructor",
    "place": "Melbourne",
    "period": "August 2025 – Present",
    "points": [
      "Teach Python, introductory data science and AI concepts.",
      "Help onboard instructors and explain complex concepts through practical lessons."
    ]
  }
];
export const projects: Project[] = [
  {
    "id": "voltwise",
    "title": "Voltwise",
    "year": "Portfolio project",
    "genre": "PREDICTIVE DATA SCIENCE",
    "logline": "Predict battery capacity ten discharge cycles ahead with a random forest, using real NASA laboratory measurements and leave-one-battery-out evaluation.",
    "stack": [
      "Python",
      "Scikit-learn",
      "dbt",
      "DuckDB",
      "FastAPI",
      "Ollama"
    ],
    "build": [
      "0.024 Ah mean absolute error across 560 held-out forecast windows: 44.7% lower than a persistence baseline. Thirteen dbt data checks support the analytics pipeline."
    ],
    "features": [
      "NASA measurements",
      "Model evaluation",
      "dbt + DuckDB",
      "Verified metrics",
      "Dashboard / local AI"
    ],
    "metrics": [
      {
        "value": "0.024 Ah",
        "label": "mean absolute error"
      },
      {
        "value": "560",
        "label": "held-out forecast windows"
      },
      {
        "value": "44.7%",
        "label": "lower error than persistence"
      },
      {
        "value": "4",
        "label": "NASA laboratory cells"
      },
      {
        "value": "13",
        "label": "dbt checks"
      }
    ],
    "github": "https://github.com/KarthikaPKumar/voltwise",
    "live": "https://karthikapkumar.github.io/voltwise/",
    "limits": "Only four laboratory cells. These results do not establish vehicle-fleet performance, remaining lifetime or battery safety. The public site provides forecasts and metrics; the generative AI assistant runs locally through Ollama.",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    },
    "motif": "flow"
  },
  {
    "id": "nexora",
    "title": "Nexora",
    "year": "Portfolio project",
    "genre": "SYSTEMS & DIAGNOSTICS",
    "logline": "Nexora (DataMedic) is an interactive demonstration of data pipeline diagnosis and recovery. It makes investigation steps visible so visitors can understand how a failure might be approached.",
    "stack": [
      "Data engineering",
      "Diagnostics",
      "Interactive systems"
    ],
    "build": [
      "A working public demonstration presents synthetic scenarios and recorded results. The focus is explaining the diagnostic workflow and making system behaviour easier to understand."
    ],
    "features": [
      "Scenario",
      "Pipeline symptoms",
      "Diagnosis",
      "Recovery explanation"
    ],
    "metrics": [
      {
        "value": "Demo",
        "label": "Interactive demonstration · Synthetic scenarios"
      }
    ],
    "github": "https://github.com/KarthikaPKumar/Nexora-demo",
    "live": "https://karthikapkumar.github.io/Nexora-demo/",
    "limits": "This is an illustrative systems demonstration. It is not connected to production pipelines and does not autonomously repair real infrastructure.",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    },
    "motif": "tenants"
  },
  {
    "id": "senseway",
    "title": "Sensory-Aware Route Planner",
    "year": "Portfolio project",
    "genre": "SPATIAL DATA & APPLICATIONS",
    "logline": "Explore central Melbourne walking routes built from OpenStreetMap streets, council address data and timestamped pedestrian-counter snapshots.",
    "stack": [
      "Python",
      "JavaScript",
      "OpenStreetMap",
      "GitHub Actions",
      "AWS architecture"
    ],
    "build": [
      "A validated JSON pipeline supplies real addresses, mapped street connections and pedestrian-counter observations. Freshness and coverage checks determine whether activity comparisons are available."
    ],
    "features": [
      "Public open data",
      "Validation",
      "JSON snapshot",
      "Walking graph",
      "Route explorer"
    ],
    "metrics": [
      {
        "value": "Demo",
        "label": "Live explorer · Real open-data snapshots"
      }
    ],
    "github": "https://github.com/KarthikaPKumar/Serverless-Sensory-Aware-Router",
    "live": "https://karthikapkumar.github.io/Serverless-Sensory-Aware-Router/",
    "limits": "Crowd observations may be stale or incomplete. Noise and light measurements remain unknown. The free demo is static; preserved AWS backend code needs further work before cloud deployment.",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    },
    "motif": "flow"
  },
  {
    "id": "wildlife",
    "title": "Wildlife Detection API",
    "year": "Portfolio project",
    "genre": "ML ENGINEERING",
    "logline": "A cloud-native inference service built around YOLOv8 and FastAPI, with an API deployment architecture using Docker, Kubernetes and infrastructure-as-code tooling.",
    "stack": [
      "YOLOv8",
      "FastAPI",
      "Docker",
      "Kubernetes"
    ],
    "build": [
      "The repository demonstrates the structure around model serving: API boundaries, containerisation and deployment configuration. Explore the implementation directly in the source."
    ],
    "features": [
      "Image input",
      "Inference API",
      "YOLOv8 model",
      "Detection response"
    ],
    "metrics": [
      {
        "value": "Code",
        "label": "Source code available · No public demo"
      }
    ],
    "github": "https://github.com/KarthikaPKumar/Cloud-Native-Wildlife-Detection-Model",
    "live": "",
    "limits": "There is no public running demo linked here. No production accuracy or deployment availability is claimed by this portfolio.",
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
    },
    "motif": "shield"
  },
  {
    "id": "speech",
    "title": "Speech Analysis Tool",
    "year": "Portfolio project",
    "genre": "SPEECH & LANGUAGE",
    "logline": "A speech and language analysis concept focused on helping employees understand and improve communication through sentiment, speech-rate and language feedback.",
    "stack": [
      "Python",
      "Speech analysis",
      "NLP"
    ],
    "build": [
      "A source-available project exploring how speech analysis and NLP could support understandable communication feedback."
    ],
    "features": [
      "Speech",
      "Language analysis",
      "Feedback concepts"
    ],
    "metrics": [
      {
        "value": "Code",
        "label": "Source code available · Concept project"
      }
    ],
    "github": "https://github.com/KarthikaPKumar/SAP",
    "live": "",
    "limits": "No public running demo or validated employee-outcome claims are presented. This is a concept project, not an employment assessment system.",
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    },
    "motif": "tenants"
  }
];
export const achievements: Achievement[] = [
  {
    "id": "ibm",
    "title": "Data Platform Engineering",
    "org": "IBM watsonx.data",
    "detail": "Professional experience with Presto, security, performance monitoring and developer tooling.",
    "laurel": "Industry experience"
  },
  {
    "id": "monash",
    "title": "Master of Data Science",
    "org": "Monash University",
    "detail": "Postgraduate study combining analysis, modelling and engineering, 2025–2026.",
    "laurel": "Education"
  },
  {
    "id": "forecast",
    "title": "Battery Forecasting",
    "org": "Voltwise",
    "detail": "0.024 Ah MAE across 560 held-out windows from four NASA lab cells. Not a fleet-performance claim.",
    "laurel": "Measured project result",
    "link": "https://karthikapkumar.github.io/voltwise/"
  },
  {
    "id": "teaching",
    "title": "Making Ideas Clear",
    "org": "Junior Engineers",
    "detail": "Teach coding, data science and AI concepts and support instructor onboarding.",
    "laurel": "Teaching"
  },
  {
    "id": "quality",
    "title": "Tested Analytics",
    "org": "Voltwise",
    "detail": "Thirteen dbt checks underpin shared metrics and a reproducible DuckDB analytics pipeline.",
    "laurel": "Data quality"
  }
];
export const certifications: Certification[] = [];
export const skillCategories: SkillCategory[] = [
  {
    "id": "languages",
    "title": "Languages",
    "subtitle": "Code behind the work",
    "skills": [
      {
        "name": "Python",
        "mono": "Py"
      },
      {
        "name": "SQL",
        "mono": "SQL"
      },
      {
        "name": "Java",
        "mono": "Jv"
      },
      {
        "name": "JavaScript",
        "mono": "Js"
      }
    ]
  },
  {
    "id": "science",
    "title": "Data Science",
    "subtitle": "Questions, models and evidence",
    "skills": [
      {
        "name": "NumPy",
        "mono": "np"
      },
      {
        "name": "SciPy",
        "mono": "sp"
      },
      {
        "name": "Scikit-learn",
        "mono": "sk"
      },
      {
        "name": "Model validation",
        "mono": "CV"
      }
    ]
  },
  {
    "id": "ml",
    "title": "ML Engineering",
    "subtitle": "From model to application",
    "skills": [
      {
        "name": "FastAPI",
        "mono": "API"
      },
      {
        "name": "Random Forest",
        "mono": "RF"
      },
      {
        "name": "YOLOv8",
        "mono": "YOLO"
      },
      {
        "name": "Ollama",
        "mono": "AI"
      }
    ]
  },
  {
    "id": "analytics",
    "title": "Analytics Engineering",
    "subtitle": "Reliable data and shared definitions",
    "skills": [
      {
        "name": "dbt",
        "mono": "dbt"
      },
      {
        "name": "DuckDB",
        "mono": "DB"
      },
      {
        "name": "Semantic metrics",
        "mono": "∑"
      },
      {
        "name": "Data quality",
        "mono": "✓"
      }
    ]
  },
  {
    "id": "infra",
    "title": "Infra & Tools",
    "subtitle": "Project architecture and delivery",
    "skills": [
      {
        "name": "Docker",
        "mono": "Dk"
      },
      {
        "name": "Kubernetes",
        "mono": "K8s"
      },
      {
        "name": "GitHub Actions",
        "mono": "CI"
      },
      {
        "name": "Git / GitHub",
        "mono": "Gt"
      }
    ]
  },
  {
    "id": "platforms",
    "title": "Data Platforms",
    "subtitle": "Professional engineering foundation",
    "skills": [
      {
        "name": "Presto",
        "mono": "P"
      },
      {
        "name": "Audit logging",
        "mono": "Log"
      },
      {
        "name": "Performance monitoring",
        "mono": "↗"
      },
      {
        "name": "Python tooling",
        "mono": "Py"
      }
    ]
  },
  {
    "id": "interests",
    "title": "Interests",
    "subtitle": "The next chapter",
    "skills": [
      {
        "name": "Predictive modelling",
        "mono": "ML"
      },
      {
        "name": "Applied AI",
        "mono": "AI"
      },
      {
        "name": "Data systems",
        "mono": "DS"
      }
    ]
  }
];
export const skillEvidence: Record<string, string[]> = {
  "Python": [
    "Voltwise (portfolio project)"
  ],
  "SQL": [
    "Voltwise (portfolio project)"
  ],
  "Java": [
    "IBM watsonx.data"
  ],
  "JavaScript": [
    "Voltwise (portfolio project)"
  ],
  "NumPy": [
    "Voltwise (portfolio project)"
  ],
  "SciPy": [
    "Voltwise (portfolio project)"
  ],
  "Scikit-learn": [
    "Voltwise (portfolio project)"
  ],
  "Model validation": [
    "Voltwise (portfolio project)"
  ],
  "FastAPI": [
    "Voltwise (portfolio project)"
  ],
  "Random Forest": [
    "Voltwise (portfolio project)"
  ],
  "YOLOv8": [
    "Wildlife Detection API (project architecture)"
  ],
  "Ollama": [
    "Voltwise (portfolio project)"
  ],
  "dbt": [
    "Voltwise (portfolio project)"
  ],
  "DuckDB": [
    "Voltwise (portfolio project)"
  ],
  "Semantic metrics": [
    "Voltwise (portfolio project)"
  ],
  "Data quality": [
    "Voltwise (portfolio project)"
  ],
  "Docker": [
    "Wildlife Detection API (project architecture)"
  ],
  "Kubernetes": [
    "Wildlife Detection API (project architecture)"
  ],
  "GitHub Actions": [
    "Voltwise (portfolio project)"
  ],
  "Git / GitHub": [
    "Voltwise (portfolio project)"
  ],
  "Presto": [
    "IBM watsonx.data"
  ],
  "Audit logging": [
    "IBM watsonx.data"
  ],
  "Performance monitoring": [
    "IBM watsonx.data"
  ],
  "Python tooling": [
    "IBM watsonx.data"
  ],
  "Predictive modelling": [
    "Voltwise (portfolio project)"
  ],
  "Applied AI": [
    "Voltwise (portfolio project)"
  ],
  "Data systems": [
    "Voltwise (portfolio project)"
  ]
};
export const seasons: Season[] = [
  {
    "number": 1,
    "title": "The Foundation",
    "period": "Computer science",
    "synopsis": "An engineering foundation at TKM College of Engineering.",
    "episodes": [
      {
        "code": "S01 E01",
        "title": "The Engineer",
        "description": "B.Tech (Honours) in Computer Science Engineering.",
        "tags": [
          "Computer science",
          "Engineering"
        ],
        "runtime": "Computer science",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  },
  {
    "number": 2,
    "title": "Building at IBM",
    "period": "2022 – 2025",
    "synopsis": "Production data platforms, security and developer tooling.",
    "episodes": [
      {
        "code": "S02 E01",
        "title": "The Platform",
        "description": "Worked on the Presto data platform within IBM watsonx.data.",
        "tags": [
          "Presto",
          "Data platforms"
        ],
        "runtime": "2022 – 2025",
        "palette": {
          "from": "#1c1003",
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547"
        }
      },
      {
        "code": "S02 E02",
        "title": "The Systems Thinker",
        "description": "Audit logging, security checks, caching and Python QA tools.",
        "tags": [
          "Security",
          "Python",
          "Performance"
        ],
        "runtime": "2022 – 2025",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      }
    ]
  },
  {
    "number": 3,
    "title": "Following the Data",
    "period": "2025 – 2026",
    "synopsis": "A new chapter at Monash University in Melbourne.",
    "episodes": [
      {
        "code": "S03 E01",
        "title": "The Data Scientist",
        "description": "Master of Data Science at Monash University.",
        "tags": [
          "Modelling",
          "Analysis"
        ],
        "runtime": "2025 – 2026",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      },
      {
        "code": "S03 E02",
        "title": "The Educator",
        "description": "Coding Instructor at Junior Engineers, teaching Python and AI.",
        "tags": [
          "Teaching",
          "Python"
        ],
        "runtime": "2025 – 2026",
        "palette": {
          "from": "#120822",
          "via": "#3d1a6e",
          "to": "#07060c",
          "accent": "#b98bff"
        }
      }
    ]
  },
  {
    "number": 4,
    "title": "Building Useful Things",
    "period": "Portfolio projects",
    "synopsis": "Explore the models and systems behind the projects.",
    "episodes": [
      {
        "code": "S04 E01",
        "title": "The Forecaster",
        "description": "Voltwise: ten-cycle capacity forecasts evaluated on four held-out NASA laboratory cells.",
        "tags": [
          "Python",
          "dbt",
          "ML"
        ],
        "runtime": "Portfolio projects",
        "palette": {
          "from": "#120822",
          "via": "#3d1a6e",
          "to": "#07060c",
          "accent": "#b98bff"
        }
      },
      {
        "code": "S04 E02",
        "title": "The Investigator",
        "description": "Nexora (DataMedic): an interactive pipeline diagnosis demonstration with synthetic scenarios.",
        "tags": [
          "Diagnostics",
          "Data engineering"
        ],
        "runtime": "Portfolio projects",
        "palette": {
          "from": "#03150f",
          "via": "#0d5a40",
          "to": "#050a08",
          "accent": "#46e3a8"
        }
      },
      {
        "code": "S04 E03",
        "title": "The Explorer",
        "description": "Sensory-aware walking routes using Melbourne open-data snapshots.",
        "tags": [
          "Open data",
          "Spatial data"
        ],
        "runtime": "Portfolio projects",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  },
  {
    "number": 5,
    "title": "What's Next",
    "period": "Now streaming",
    "synopsis": "Looking for the next question worth solving.",
    "episodes": [
      {
        "code": "S05 E01",
        "title": "The Next Chapter",
        "description": "Opportunities across Data Science, ML Engineering and Analytics Engineering.",
        "tags": [
          "Data Science",
          "ML Engineering",
          "Analytics Engineering"
        ],
        "runtime": "Now streaming",
        "palette": {
          "from": "#03150f",
          "via": "#0d5a40",
          "to": "#050a08",
          "accent": "#46e3a8"
        }
      }
    ]
  }
];
export const topPicks: TopPick[] = [
  {
    "label": "Industry",
    "title": "IBM watsonx.data",
    "detail": "Presto and platform tooling",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Predictive models",
    "title": "Voltwise",
    "detail": "NASA lab data · held-out evaluation",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    }
  },
  {
    "label": "Data quality",
    "title": "dbt + DuckDB",
    "detail": "13 data checks",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  {
    "label": "Education",
    "title": "Monash",
    "detail": "Master of Data Science",
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
    }
  },
  {
    "label": "Diagnostics",
    "title": "Nexora",
    "detail": "DataMedic · synthetic scenarios",
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    }
  },
  {
    "label": "Open data",
    "title": "Melbourne Routes",
    "detail": "Street graphs and timestamped snapshots",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Model serving",
    "title": "FastAPI",
    "detail": "Portfolio API architecture",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    }
  },
  {
    "label": "Local AI",
    "title": "Ollama",
    "detail": "Optional local agent in Voltwise",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  {
    "label": "Communication",
    "title": "Teaching",
    "detail": "Junior Engineers",
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
    }
  },
  {
    "label": "Focus",
    "title": "Data · Models · Systems",
    "detail": "Three connected disciplines",
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    }
  }
];
export const introSlides: IntroSlide[] = [
  {
    "kicker": "The foundation",
    "title": "Engineering meets data",
    "lines": [
      "Karthika Pillai Kumar · Kathy",
      "Data Science · ML Engineering · Analytics Engineering"
    ]
  },
  {
    "kicker": "Experience",
    "title": "Building at IBM",
    "lines": [
      "Software Developer · August 2022 – January 2025",
      "watsonx.data / Presto · security · performance · tooling"
    ]
  },
  {
    "kicker": "Education",
    "title": "Following the data",
    "lines": [
      "Master of Data Science · Monash University",
      "Melbourne · 2025–2026"
    ]
  },
  {
    "kicker": "Originals",
    "title": "Models. Systems. Questions.",
    "lines": [
      "Voltwise · battery capacity forecasting",
      "Nexora (DataMedic) · pipeline diagnosis demo",
      "Sensory-aware routes · Melbourne open data"
    ]
  },
  {
    "kicker": "The toolkit",
    "title": "From data to decisions",
    "lines": [
      "Python · SQL · Scikit-learn · dbt · DuckDB",
      "FastAPI · Ollama · GitHub Actions"
    ]
  },
  {
    "kicker": "Next episode",
    "title": "Let’s build something useful",
    "lines": [
      "Data Science · ML Engineering · Analytics Engineering",
      "karthikapillai@gmail.com"
    ]
  }
];
export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'kathy',
    name: 'Kathy',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: '10 highlights from the work', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Highlights', meta: `${achievements.length} Career & Project Highlights`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Career summary • View & print', palette: violet },
};
