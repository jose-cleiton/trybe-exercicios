import { z } from 'zod';

const FrameZodSchema = z.object({
  material: z.string(),
  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',    
  }).min(3, { message: 'Color must be at least 3 characters long' }) });

type IFrame = z.infer<typeof FrameZodSchema>;

export default IFrame;
export { FrameZodSchema };
