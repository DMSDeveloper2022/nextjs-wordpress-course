import {
  faBathtub,
  faBed,
  faCar,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePageContext } from "context/page";
import numeral from "numeral";

export const PropertyFeature = () => {
  const { propertyFeatures } = usePageContext();

  console.log("PROPERTY FEATURES", propertyFeatures);
  return (
    <div className="max-w-lg ms-auto my-10 bg-white/80 text-slate-800 p-5 text-center">
      <div className="grid grid-cols-2 mb-4 gap-y-5 text-left">
        <div>
          <FontAwesomeIcon icon={faBed} className="faProperty" />{" "}
          {propertyFeatures.bedrooms} bedrooms
        </div>
        <div>
          <FontAwesomeIcon icon={faBathtub} className="faProperty" />{" "}
          {propertyFeatures.bathrooms} bedrooms
        </div>
        <div>
          {!!propertyFeatures.hasParking && (
            <>
              <FontAwesomeIcon icon={faCar} className="faProperty" /> parking
              available
            </>
          )}
        </div>
        <div>
          {!!propertyFeatures.petFriendly && (
            <>
              <FontAwesomeIcon icon={faDog} className="faProperty" /> pet
              friendly
            </>
          )}
        </div>
      </div>
      <h3 className="text-5xl font-bold mt-2">
        ${numeral(propertyFeatures.price).format(0, 0)}
      </h3>
    </div>
  );
};
