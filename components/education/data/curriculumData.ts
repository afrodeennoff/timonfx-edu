import { CurriculumModule } from '../types';
import { CONVERTED_CURRICULUM_MODULES, ICT_CLUSTERS } from './clustersData';

export { ICT_CLUSTERS };

// Export the 14 official clusters as the curriculum modules
export const CURRICULUM_MODULES: CurriculumModule[] = CONVERTED_CURRICULUM_MODULES;
