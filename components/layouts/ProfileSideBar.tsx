'use client';

import {
  AvatarLarge,
  ContactMini,
  ContactRow,
  DevName,
  DevRole,
  DownloadButton,
  ProfileCard,
} from '@/styles/page.styles';
import { Box } from '@mui/material';
import Image from 'next/image';
import DownloadIcon from '@mui/icons-material/Download';
import { CONTACT_ITEMS } from '@/constants/profile.constants';

const ProfileSideBar = () => {
  return (
    <ProfileCard>
      <AvatarLarge>
        <Image
          src='https://res.cloudinary.com/ddbxaguxc/image/upload/v1763621717/small_IMG_20251113_090858_rnhguf_8cc9151c1b.png'
          alt='Filjumar Fullstack Web Developer'
          width={100}
          height={100}
          loading='eager'
          draggable={false}
          unoptimized
        />
      </AvatarLarge>
      <DevName>Filjumar</DevName>
      <DevRole>Fullstack Web Developer</DevRole>

      <ContactMini>
        {CONTACT_ITEMS.map((item) => {
          const IconComponent = item.icon;
          return (
            <ContactRow key={item.id}>
              <Box className='contact-icon'>
                <IconComponent />
              </Box>
              <span>{item.text}</span>
            </ContactRow>
          );
        })}
      </ContactMini>

      <DownloadButton
        component='a'
        href='/Resume.pdf'
        download
        startIcon={
          <Box className='download-icon'>
            <DownloadIcon />
          </Box>
        }
      >
        Download Resume
      </DownloadButton>
    </ProfileCard>
  );
};

export default ProfileSideBar;
