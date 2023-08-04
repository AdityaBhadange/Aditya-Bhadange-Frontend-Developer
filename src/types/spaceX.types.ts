/**
 * Represents the dimensions of an object in meters and feet.
 */
interface Height {
  /** The height in meters. */
  meters: number;
  /** The height in feet. */
  feet: number;
}

/**
 * Represents the diameter of an object in meters and feet.
 */
interface Diameter {
  /** The diameter in meters. */
  meters: number;
  /** The diameter in feet. */
  feet: number;
}

/**
 * Represents the mass of an object in kilograms and pounds.
 */
interface Mass {
  /** The mass in kilograms. */
  kg: number;
  /** The mass in pounds. */
  lb: number;
}

/**
 * Represents the weight of a payload in kilograms and pounds.
 */
interface PayloadWeight {
  /** The unique identifier for the payload. */
  id: string;
  /** The name of the payload. */
  name: string;
  /** The weight of the payload in kilograms. */
  kg: number;
  /** The weight of the payload in pounds. */
  lb: number;
}

/**
 * Represents the thrust of an object in kilonewtons (kN) and pounds-force (lbf).
 */
interface Thrust {
  /** The thrust in kilonewtons (kN). */
  kN: number;
  /** The thrust in pounds-force (lbf). */
  lbf: number;
}

/**
 * Represents the first stage of a rocket.
 */
interface FirstStage {
  /** Indicates whether the first stage is reusable. */
  reusable: boolean;
  /** The number of engines in the first stage. */
  engines: number;
  /** The amount of fuel in tons used in the first stage. */
  fuel_amount_tons: number;
  /** The burn time in seconds for the first stage. */
  burn_time_sec: number;
  /** The thrust of the first stage at sea level and vacuum conditions. */
  thrust_sea_level: Thrust;
  /** The thrust of the first stage in a vacuum. */
  thrust_vacuum: Thrust;
}

/**
 * Represents the payloads of a rocket's second stage.
 */
interface Payloads {
  /** The first option for payloads. */
  option_1: string;
  /** The details about the composite fairing payload. */
  composite_fairing: {
    /** The height of the composite fairing in meters and feet. */
    height: Height;
    /** The diameter of the composite fairing in meters and feet. */
    diameter: Diameter;
  };
}

/**
 * Represents the second stage of a rocket.
 */
interface SecondStage {
  /** Indicates whether the second stage is reusable. */
  reusable: boolean;
  /** The number of engines in the second stage. */
  engines: number;
  /** The amount of fuel in tons used in the second stage. */
  fuel_amount_tons: number;
  /** The burn time in seconds for the second stage. */
  burn_time_sec: number;
  /** The thrust of the second stage in kilonewtons (kN) and pounds-force (lbf). */
  thrust: Thrust;
  /** The payloads of the second stage. */
  payloads: Payloads;
}

/**
 * Represents the engines of a rocket.
 */
interface IEngines {
  /** The number of engines. */
  number: number;
  /** The type of engines. */
  type: string;
  /** The version of the engines. */
  version: string;
  /** The layout of the engines. */
  layout: string;
  /** The specific impulse (ISP) of the engines at sea level and vacuum conditions. */
  isp: {
    /** The ISP at sea level. */
    sea_level: number;
    /** The ISP in a vacuum. */
    vacuum: number;
  };
  /** The maximum engine loss allowed. */
  engine_loss_max: number;
  /** The propellant used in the engines (e.g., liquid oxygen). */
  propellant_1: string;
  /** The second propellant used in the engines (e.g., RP-1 kerosene). */
  propellant_2: string;
  /** The thrust of the engines at sea level and in a vacuum. */
  thrust_sea_level: Thrust;
  /** The thrust of the engines in a vacuum. */
  thrust_vacuum: Thrust;
  /** The thrust-to-weight ratio of the engines. */
  thrust_to_weight: number;
}

/**
 * Represents the landing legs of a rocket.
 */
interface LandingLegs {
  /** The number of landing legs. */
  number: number;
  /** The material used for the landing legs or null if not applicable. */
  material: string | null;
}

/**
 * Represents a rocket.
 */
export interface Rocket {
  /** The unique identifier of the rocket. */
  id: number;
  /** Indicates whether the rocket is currently active. */
  active: boolean;
  /** The number of stages in the rocket. */
  stages: number;
  /** The number of boosters in the rocket. */
  boosters: number;
  /** The cost per launch of the rocket. */
  cost_per_launch: number;
  /** The success rate percentage of the rocket. */
  success_rate_pct: number;
  /** The date of the first flight of the rocket in ISO 8601 format. */
  first_flight: string;
  /** The country of origin of the rocket. */
  country: string;
  /** The company that manufactures the rocket. */
  company: string;
  /** The height of the rocket in meters and feet. */
  height: Height;
  /** The diameter of the rocket in meters and feet. */
  diameter: Diameter;
  /** The mass of the rocket in kilograms and pounds. */
  mass: Mass;
  /** The weights of different payloads that the rocket can carry. */
  payload_weights: PayloadWeight[];
  /** The first stage of the rocket. */
  first_stage: FirstStage;
  /** The second stage of the rocket. */
  second_stage: SecondStage;
  /** The engines used in the rocket. */
  engines: IEngines;
  /** The landing legs of the rocket. */
  landing_legs: LandingLegs;
  /** URLs of images depicting the rocket. */
  flickr_images: string[];
  /** The Wikipedia page URL of the rocket. */
  wikipedia: string;
  /** A description of the rocket. */
  description: string;
  /** The unique identifier of the rocket (e.g., "falcon1"). */
  rocket_id: string;
  /** The name of the rocket (e.g., "Falcon 1"). */
  rocket_name: string;
  /** The type of the rocket (e.g., "rocket"). */
  rocket_type: string;
}

/**
 * Represents a mission of a spacecraft.
 */
interface Mission {
  /** The name of the mission. */
  name: string;
  /** The flight number of the mission. */
  flight: number;
}

/**
 * Represents a spacecraft capsule.
 */
export interface Capsule {
  /** The unique serial number of the capsule. */
  capsule_serial: string;
  /** The ID of the capsule. */
  capsule_id: string;
  /** The current status of the capsule. */
  status: string;
  /** The date and time of the original launch in ISO 8601 format. */
  original_launch: string;
  /** The UNIX timestamp of the original launch. */
  original_launch_unix: number;
  /** The list of missions associated with the capsule. */
  missions: Mission[];
  /** The number of landings the capsule has performed. */
  landings: number;
  /** The type of the capsule. */
  type: string;
  /** Additional details about the capsule. */
  details: string;
  /** The number of times the capsule has been reused. */
  reuse_count: number;
}
