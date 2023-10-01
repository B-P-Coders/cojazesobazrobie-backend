import { StudyLevel, StudyProfile, StudyStatus, Title } from "./enums.entity";

export { Study, StudyName, RunName, Language, Isced, Institution, Cooperator };

class Study {
  id?: number;
  name_id?: number;
  institution_id?: number;
  level?: StudyLevel;
  profile?: StudyProfile;
  isced_id?: number;
  create_date?: Date;
  is_for_teacher?: boolean;
  language_list?: string;
  is_shared?: boolean;
  status?: StudyStatus;
  expire_date?: string;
  del_date?: string;
  trades?: string;
  cooperator_id?: number;
  cooperation_start_date?: Date;
  cooperation_end_date?: Date;
  run_name_id?: number;
  run_form?: boolean;
  lang_id?: number;
  run_date?: Date;
  semester_count?: number;
  ects_count?: number;
  is_dual?: boolean;
  run_status?: StudyStatus;
  is_work_cooperation?: boolean;
  run_title?: Title;
  cooperators?: Cooperator;
  institutions?: Institution;
  isced?: Isced;
  languages?: Language;
  study_names?: StudyName;
  run_names?: RunName;
}

class StudyName {
  name?: string;
  id?: number;
  studies?: Study[];
}

class RunName {
  run_name?: string;
  id?: number;
  studies?: Study[];
}

class Language {
  language?: string;
  id?: number;
  studies?: Study[];
}

class Isced {
  isced_id?: number;
  isced_name?: string;
  id?: number;
  studies?: Study[];
}

class Institution {
  institution?: string;
  id?: number;
  studies?: Study[];
}

class Cooperator {
  cooperator_id?: string;
  cooperator_name?: string;
  is_abroad_cooperator?: boolean;
  id?: number;
  studies?: Study[];
}