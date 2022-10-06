import React from 'react';

type SeeDocumentIconProps = {
  onClick?: (e: React.SyntheticEvent<SVGElement, MouseEvent>) => void;
};

export const SeeDocumentIcon: React.FC<SeeDocumentIconProps> = ({ onClick }) => {
  return (
    <svg
      className="see-document-icon icon"
      viewBox="0 0 16 15"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6338 0.0429838C15.2692 0.206713 15.7781 0.689358 15.9478 1.28913C16.0181 1.53782 16.017 12.3153 15.9466 12.5743C15.8145 13.0607 15.4369 13.4914 14.9588 13.701C14.8152 13.764 14.6143 13.8298 14.5124 13.8473C14.3885 13.8686 13.4321 13.8791 11.6279 13.8791H8.92871L9.02867 13.7544C9.23285 13.4996 9.48423 13.1244 9.58851 12.9187L9.69604 12.7067L11.9938 12.6986L14.2916 12.6906L14.4244 12.6239C14.4974 12.5873 14.5958 12.5024 14.6431 12.4353L14.729 12.3133L14.7371 7.31481L14.7451 2.31629H8.60638H2.46759L2.46687 5.39042L2.46615 8.46455L2.193 8.5746C2.04277 8.63512 1.76624 8.7705 1.57849 8.87541C1.39074 8.98033 1.23283 9.06617 1.22758 9.06617C1.22233 9.06617 1.21802 7.3782 1.21802 5.31511C1.21802 2.74702 1.2287 1.50912 1.25188 1.38991C1.37384 0.762874 1.93661 0.203279 2.60691 0.0425143C2.77051 0.0032769 3.50164 -0.00182953 8.63609 0.000459562C13.4565 0.00263126 14.5062 0.0100855 14.6338 0.0429838ZM12.9327 5.19232V5.77927H12.3079H11.6832V5.19232V4.60538H12.3079H12.9327V5.19232ZM10.4648 5.19232V5.77927H7.37215H4.27946V5.19232V4.60538H7.37215H10.4648V5.19232ZM12.9327 7.51076V8.09771H12.3079H11.6832V7.51076V6.92382H12.3079H12.9327V7.51076ZM10.4648 7.51076V8.09771H7.37215H4.27946V7.51076V6.92382H7.37215H10.4648V7.51076ZM12.9327 9.8292V10.4161H12.3079H11.6832V9.8292V9.24225H12.3079H12.9327V9.8292ZM10.4648 9.8292V10.4161H9.71184H8.95888L8.60013 10.0644C8.40279 9.87087 8.12661 9.62424 7.98637 9.51627C7.84614 9.4083 7.71081 9.30247 7.68567 9.28111C7.64762 9.2488 7.87807 9.24225 9.05238 9.24225H10.4648V9.8292ZM4.63871 9.27495C5.75111 9.35991 6.99615 10.029 7.95398 11.0565C8.35178 11.4832 8.62172 11.9205 8.62172 12.1381C8.62172 12.5789 7.62997 13.6759 6.71275 14.2495C5.88607 14.7665 5.12873 15.0016 4.29508 15C3.41054 14.9983 2.54594 14.6999 1.69389 14.1022C0.805973 13.4794 0.00103283 12.542 1.90735e-06 12.1296C-0.000904083 11.7739 0.71338 10.902 1.48215 10.3205C2.52079 9.53479 3.55518 9.19216 4.63871 9.27495ZM4.30449 11.1032L4.29508 11.7902L4.19955 11.9029C4.14701 11.9649 4.04211 12.0453 3.96645 12.0816C3.83618 12.1441 3.79257 12.1476 3.14632 12.1476H2.46375L2.48374 12.287C2.56646 12.8638 2.86005 13.2899 3.38424 13.5939C3.65765 13.7525 3.92574 13.8239 4.26384 13.8281C4.80319 13.8349 5.21355 13.6786 5.59173 13.3224C5.95685 12.9784 6.12258 12.6071 6.12258 12.133C6.12258 11.2839 5.44275 10.5572 4.545 10.4467C4.44191 10.434 4.34775 10.4219 4.33573 10.4199C4.32373 10.4178 4.30967 10.7253 4.30449 11.1032Z" />
    </svg>
  );
};