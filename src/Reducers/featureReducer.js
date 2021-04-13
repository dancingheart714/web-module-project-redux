import { ADD_FEATURE, REMOVE_FEATURE } from '../Actions/featureActions';

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 },
  ],
};

export const featureReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FEATURE:
      const removedFeature = state.car.features.filter(
        (feature) => feature.id === action.payload
      )[0];
      const remainingFeatures = state.car.features.filter(
        (feature) => feature.id !== action.payload
      );

      return {
        ...state,
        additionalPrice: state.additionalPrice - removedFeature.price,
        car: {
          ...state.car,
          features: remainingFeatures,
        },

        additionalFeatures: [...state.additionalFeatures, removedFeature],
      };

    case ADD_FEATURE:
      const newFeature = state.additionalFeatures.filter(
        (feature) => feature.id === action.payload
      )[0];
      const updatedFeature = state.additionalFeatures.filter(
        (feature) => feature.id !== action.payload
      );

      return {
        ...state,
        additionalPrice: state.additionalPrice + newFeature.price,
        car: {
          ...state.car,
          features: [...state.car.features, newFeature],
        },
        additionalFeatures: updatedFeature,
      };

    default:
      return state;
  }
};
export default featureReducer;
