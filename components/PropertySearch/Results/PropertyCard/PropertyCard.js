import {
  faBathtub,
  faBed,
  faCar,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import numeral from "numeral";

export const PropertyCard = ({
  title,
  destination,
  image,
  bedrooms,
  bathrooms,
  price,
  hasParking,
  petFriendly,
}) => {
  // console.log("hasParking: ", hasParking);
  return (
    <Link href={destination}>
      <a className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200">
        <div className="flex w-full">
          <Image
            src={image}
            height="200px"
            width="300px"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="mt-3 text-lg font-bold">{title}</div>
        <div className="text-lg">${numeral(price).format(0, 0)}</div>
        <div className="flex justify-between text-sm mt-3">
          <div>
            <FontAwesomeIcon icon={faBathtub} className="faProperty" />
            <span className="pl-2">{bathrooms} Bathrooms</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBed} className="faProperty" />
            <span className="pl-2">{bedrooms} Bedrooms</span>
          </div>
        </div>
        {(!!hasParking || !!petFriendly) && (
          <div className="flex justify-between text-sm mt-3">
            <div>
              {!!hasParking && (
                <>
                  <FontAwesomeIcon icon={faCar} className="faProperty" />{" "}
                  parking available
                </>
              )}
            </div>
            <div>
              {!!petFriendly && (
                <>
                  <FontAwesomeIcon icon={faDog} className="faProperty" /> pet
                  friendly
                </>
              )}
            </div>
          </div>
        )}
      </a>
    </Link>
  );
};
