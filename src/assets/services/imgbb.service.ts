import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import * as FormData from 'form-data';

@Injectable()
export class ImgbbService {
  private readonly imgbbApiKey = '7a4e97a4922a14f515753648605c4b04';
  private readonly imgbbApiUrl = 'https://api.imgbb.com/1/upload';

  async uploadFile(file: Express.Multer.File): Promise<ImgBBResponse> {
    try {
      const form = new FormData();
      form.append('image', file.buffer, file.originalname);

      const response = await axios.post(
        `${this.imgbbApiUrl}?key=${this.imgbbApiKey}`,
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (!response?.data?.success) {
        throw new BadRequestException('Error uploading image to ImgBB');
      }

      return response.data;
    } catch (error) {
      // console.error('Error uploading image:', error);
      throw new BadRequestException(`Failed to upload image: ${error.message}`);
    }
  }

  async uploadFiles(files: Express.Multer.File[]): Promise<ImgBBResponse[]> {
    const uploadPromises = files.map(async (file) => {
      try {
        return await this.uploadFile(file);
      } catch (error) {
        console.error(
          `Skipping file ${file.originalname}:`,
          error.response?.data || error.message,
        );
        return null; // Skip failed uploads
      }
    });

    const results = await Promise.allSettled(uploadPromises);

    return results
      .filter(
        (result) => result.status === 'fulfilled' && result.value !== null,
      )
      .map((result) => (result as PromiseFulfilledResult<ImgBBResponse>).value);
  }
}

// ----------------------------------------------------------------------

interface ImgBBImage {
  filename: string;
  name: string;
  mime: string;
  extension: string;
  url: string;
}

interface ImgBBResponse {
  data: {
    id: string;
    title: string;
    url_viewer: string;
    url: string;
    display_url: string;
    width: string; // It's a string in the response, but you may convert it to a number if needed
    height: string; // Same as width, convert it to number if needed
    size: string; // Size is given as a string
    time: string; // Time is a Unix timestamp in string format
    expiration: string;
    image: ImgBBImage;
    thumb: ImgBBImage;
    medium: ImgBBImage;
    delete_url: string;
  };
  success: boolean;
  status: number;
}
