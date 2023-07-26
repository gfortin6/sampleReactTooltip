import React from 'react';
import { Button } from 'react-bootstrap';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { PlacesType, Tooltip } from 'react-tooltip';
import { UIVariant } from '../../enums/UIVariant';
import '../../styles/component/badge.scss';

interface OnClickProps {
  clickAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
interface OverlayInfo {
  text: string; //simple text or html
  place?: PlacesType; //top','top-start','top-end','right','right-start','right-end','bottom','bottom-start','bottom-end','left','left-start','left-end'
}

export interface BadgeProps {
  variant?: string;
  text: string;
  onClickAction?: OnClickProps;
  overlay?: OverlayInfo;
  deletable?: boolean;
  disabled?: boolean;
}

const Badge: React.FC<BadgeProps> = (props) => {
  const i = Math.random().toString();

  return (
    <>
      {/* Custom badge */}
      {props.overlay && (
        <span>
          <Button
            className="custom-badge mb-3 me-2"
            variant={props.disabled ? UIVariant.SECONDARY : props.variant || UIVariant.PRIMARY}
            onClick={props.onClickAction && props.onClickAction.clickAction}
            disabled={props.disabled}
            id={props.text}
            data-tooltip-id={i}
            data-tooltip-html={props.overlay.text}
          >
            {props.text}
            {props.deletable && (
              <span className="ps-2">
                <RiDeleteBin6Line className="custom-badge-delete" />
              </span>
            )}
          </Button>
          <Tooltip id={i} place={props.overlay.place ? props.overlay.place : 'top'} />
        </span>
      )}

      {!props.overlay && (
        <Button
          className="custom-badge mb-3 me-2"
          variant={props.disabled ? UIVariant.SECONDARY : props.variant || UIVariant.PRIMARY}
          onClick={props.onClickAction && props.onClickAction.clickAction}
          disabled={props.disabled}
          id={props.text}
        >
          {props.text}
          {props.deletable && (
            <span className="ps-2">
              <RiDeleteBin6Line className="custom-badge-delete" />
            </span>
          )}
        </Button>
      )}
    </>
  );
};

export default Badge;
