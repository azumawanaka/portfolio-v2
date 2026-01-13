import {
  ArrowButton,
  NavArrows,
  PageIndicator,
  PageNum,
} from '@/styles/page.styles';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FooterPageIndicator = ({
  value,
  setValue,
}: {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <PageIndicator>
      <PageNum>Page {value + 1} of 4</PageNum>
      <NavArrows>
        <ArrowButton
          disabled={value === 0}
          active={value > 0}
          data-media-type='banani-button'
          sx={{ width: '40px', height: '40px' }}
          onClick={() => value > 0 && setValue(value - 1)}
        >
          <ArrowBackIcon sx={{ fontSize: '20px' }} />
        </ArrowButton>
        <ArrowButton
          disabled={value === 3}
          active={value < 3}
          data-media-type='banani-button'
          sx={{ width: '40px', height: '40px' }}
          onClick={() => value < 3 && setValue(value + 1)}
        >
          <ArrowForwardIcon sx={{ fontSize: '20px' }} />
        </ArrowButton>
      </NavArrows>
    </PageIndicator>
  );
};

export default FooterPageIndicator;
