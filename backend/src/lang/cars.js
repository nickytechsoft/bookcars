import LocalizedStrings from 'react-localization';
import Env from '../config/env.config';
import UserService from '../services/UserService';

export const strings = new LocalizedStrings({
    fr: {
        NEW_CAR: 'Nouvelle voiture',
        DELETE_CAR: 'Êtes-vous sûr de vouloir supprimer cette voiture ?',
        CAR_CURRENCY: ' DH/jour',
        FUEL_POLICY: 'Politique carburant',
        DIESEL: 'Diesel',
        GASOLINE: 'Essence',
        DIESEL_SHORT: 'D',
        GASOLINE_SHORT: 'E',
        GEARBOX_MANUAL: 'Manuelle',
        GEARBOX_AUTOMATIC: 'Automatique',
        GEARBOX_MANUAL_SHORT: 'M',
        GEARBOX_AUTOMATIC_SHORT: 'A',
        FUEL_POLICY_LIKE_FOR_LIKE: 'Plein/Plein',
        FUEL_POLICY_FREE_TANK: 'Plein inclus',
        DIESEL_TOOLTIP: 'Cette voiture a un moteur diesel',
        GASOLINE_TOOLTIP: 'Cette voiture a un moteur essence',
        GEARBOX_MANUAL_TOOLTIP: 'Cette voiture a une transmission manuelle',
        GEARBOX_AUTOMATIC_TOOLTIP: 'Cette voiture a une transmission automatique',
        SEATS_TOOLTIP_1: 'Cette voiture a ',
        SEATS_TOOLTIP_2: 'sièges',
        DOORS_TOOLTIP_1: 'Cette voiture a ',
        DOORS_TOOLTIP_2: 'portes',
        AIRCON_TOOLTIP: 'Cette voiture a de la climatisation',
        FUEL_POLICY_LIKE_FOR_LIKE_TOOLTIP: 'Cette voiture est fournie avec du carburant dans le réservoir et doit être rendu avec la même quantité de carburant.',
        FUEL_POLICY_FREE_TANK_TOOLTIP: 'Le prix inclut un plein de carburant',
        MILEAGE: 'Kilométrage',
        MILEAGE_UNIT: 'KM/jour',
        UNLIMITED: 'Illimité',
        CANCELLATION: 'Annulation',
        CANCELLATION_TOOLTIP: 'La réservation peut être annulée avant la date de commencement de la location.',
        AMENDMENTS: 'Modifications',
        AMENDMENTS_TOOLTIP: 'La réservation peut être modifiée avant la date de commencement de la location.',
        THEFT_PROTECTION: 'Prontection contre le vol',
        THEFT_PROTECTION_TOOLTIP: 'La location peut inclure une protection contre le vol.',
        COLLISION_DAMAGE_WAVER: 'Couverture en cas de collision',
        COLLISION_DAMAGE_WAVER_TOOLTIP: 'La location peut inclure une couverture en cas de collision.',
        FULL_INSURANCE: 'Assurance Tous Risques',
        FULL_INSURANCE_TOOLTIP: 'La location peut inclure une couverture en cas de collision, de dommages et vol du véhicule.',
        ADDITIONAL_DRIVER: 'Conducteur supplémentaire',
        INCLUDED: 'Inclus',
        UNAVAILABLE: 'Indisponible',
    },
    en: {
        NEW_CAR: 'New car',
        DELETE_CAR: 'Are you sure you want to delete this car?',
        CAR_CURRENCY: ' DH/day',
        FUEL_POLICY: 'Fuel policy',
        DIESEL: 'Diesel',
        GASOLINE: 'Gasoline',
        DIESEL_SHORT: 'D',
        GASOLINE_SHORT: 'G',
        GEARBOX_MANUAL: 'Manual',
        GEARBOX_AUTOMATIC: 'Automatic',
        GEARBOX_MANUAL_SHORT: 'M',
        GEARBOX_AUTOMATIC_SHORT: 'A',
        FUEL_POLICY_LIKE_FOR_LIKE: 'Like for Like',
        FUEL_POLICY_FREE_TANK: 'Free tank',
        DIESEL_TOOLTIP: 'This car has a diesel engine',
        GASOLINE_TOOLTIP: 'This car has a gasoline engine',
        GEARBOX_MANUAL_TOOLTIP: 'This car has a manual gearbox',
        GEARBOX_AUTOMATIC_TOOLTIP: 'This car has an automatic gearbox',
        SEATS_TOOLTIP_1: 'This car has ',
        SEATS_TOOLTIP_2: 'seats',
        DOORS_TOOLTIP_1: 'This car has ',
        DOORS_TOOLTIP_2: 'doors',
        AIRCON_TOOLTIP: 'This car has aircon',
        FUEL_POLICY_LIKE_FOR_LIKE_TOOLTIP: 'This car is supplied with fuel and must be returned with the same amount of fuel.',
        FUEL_POLICY_FREE_TANK_TOOLTIP: 'The price includes a full tank of fuel.',
        MILEAGE: 'Mileage',
        MILEAGE_UNIT: 'KM/day',
        UNLIMITED: 'Unlimited',
        CANCELLATION: 'Cancellation',
        CANCELLATION_TOOLTIP: 'The reservation can be canceled before the start date of the rental.',
        AMENDMENTS: 'Amendments',
        AMENDMENTS_TOOLTIP: 'The reservation can be modified before the start date of the rental.',
        THEFT_PROTECTION: 'Theft protection',
        THEFT_PROTECTION_TOOLTIP: 'Rental may include theft protection.',
        COLLISION_DAMAGE_WAVER: 'Collision damage waiver',
        COLLISION_DAMAGE_WAVER_TOOLTIP: 'Rental may include collision damage waiver.',
        FULL_INSURANCE: 'Fill insurance',
        FULL_INSURANCE_TOOLTIP: 'The rental may include collision damage waiver and theft protection of the vehicle.',
        ADDITIONAL_DRIVER: 'Additional driver',
        INCLUDED: 'Included',
        UNAVAILABLE: 'Unavailable',
    }
});

let language = UserService.getQueryLanguage();

if (language === '' || !Env.LANGUAGES.includes(language)) {
    language = UserService.getLanguage();
}

strings.setLanguage(language);
