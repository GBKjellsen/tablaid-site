export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      cfs_check_in: {
        Row: {
          answers: Json
          cfs_score: number | null
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          answers: Json
          cfs_score?: number | null
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          answers?: Json
          cfs_score?: number | null
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cfs_check_in_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cfs_question: {
        Row: {
          archived: boolean
          created_at: string
          frailty_on_yes: boolean
          id: string
          label: string
          question_key: string
          sort_order: number
          weight: number
        }
        Insert: {
          archived?: boolean
          created_at?: string
          frailty_on_yes: boolean
          id?: string
          label: string
          question_key: string
          sort_order?: number
          weight?: number
        }
        Update: {
          archived?: boolean
          created_at?: string
          frailty_on_yes?: boolean
          id?: string
          label?: string
          question_key?: string
          sort_order?: number
          weight?: number
        }
        Relationships: []
      }
      check_in_questions: {
        Row: {
          category: string | null
          created_at: string
          id: number
          question: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: number
          question?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: number
          question?: string | null
        }
        Relationships: []
      }
      default_timeslot: {
        Row: {
          default_time_from: string
          default_time_to: string
          default_timeslot: string
          default_timeslot_notif: string
          default_timezone: string | null
          id: number
        }
        Insert: {
          default_time_from?: string
          default_time_to?: string
          default_timeslot: string
          default_timeslot_notif?: string
          default_timezone?: string | null
          id?: number
        }
        Update: {
          default_time_from?: string
          default_time_to?: string
          default_timeslot?: string
          default_timeslot_notif?: string
          default_timezone?: string | null
          id?: number
        }
        Relationships: []
      }
      diary_entry: {
        Row: {
          body: string
          created_at: string
          entry_date: string
          id: number
          updated_at: string
          user_id: string
        }
        Insert: {
          body: string
          created_at?: string
          entry_date: string
          id?: never
          updated_at?: string
          user_id: string
        }
        Update: {
          body?: string
          created_at?: string
          entry_date?: string
          id?: never
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      fest_administrasjonsvei: {
        Row: {
          dn: string | null
          id: string
          s: string | null
          v: string | null
        }
        Insert: {
          dn?: string | null
          id: string
          s?: string | null
          v?: string | null
        }
        Update: {
          dn?: string | null
          id?: string
          s?: string | null
          v?: string | null
        }
        Relationships: []
      }
      fest_alternativstyrkenvner: {
        Row: {
          id: string
          u: string | null
          v: string | null
        }
        Insert: {
          id: string
          u?: string | null
          v?: string | null
        }
        Update: {
          id?: string
          u?: string | null
          v?: string | null
        }
        Relationships: []
      }
      fest_atc: {
        Row: {
          dn: string | null
          id: string
          s: string | null
          v: string
        }
        Insert: {
          dn?: string | null
          id: string
          s?: string | null
          v: string
        }
        Update: {
          dn?: string | null
          id?: string
          s?: string | null
          v?: string
        }
        Relationships: []
      }
      fest_atckombipreparat: {
        Row: {
          dn: string | null
          id: string
          s: string | null
          v: string | null
        }
        Insert: {
          dn?: string | null
          id: string
          s?: string | null
          v?: string | null
        }
        Update: {
          dn?: string | null
          id?: string
          s?: string | null
          v?: string | null
        }
        Relationships: []
      }
      fest_bruksomradeetikett: {
        Row: {
          dn: string | null
          id: string
          s: string | null
          v: string
        }
        Insert: {
          dn?: string | null
          id: string
          s?: string | null
          v: string
        }
        Update: {
          dn?: string | null
          id?: string
          s?: string | null
          v?: string
        }
        Relationships: []
      }
      fest_ean: {
        Row: {
          ean: string
          id: string
        }
        Insert: {
          ean: string
          id: string
        }
        Update: {
          ean?: string
          id?: string
        }
        Relationships: []
      }
      fest_enhetsdosering: {
        Row: {
          dn: string | null
          id: string
          s: string | null
          v: string
        }
        Insert: {
          dn?: string | null
          id: string
          s?: string | null
          v: string
        }
        Update: {
          dn?: string | null
          id?: string
          s?: string | null
          v?: string
        }
        Relationships: []
      }
      fest_forhandsregelinntak: {
        Row: {
          dn: string | null
          id: string
          s: string | null
          v: string
        }
        Insert: {
          dn?: string | null
          id: string
          s?: string | null
          v: string
        }
        Update: {
          dn?: string | null
          id?: string
          s?: string | null
          v?: string
        }
        Relationships: []
      }
      fest_kortdose: {
        Row: {
          dn: string | null
          id: string
          s: string | null
          v: string
        }
        Insert: {
          dn?: string | null
          id: string
          s?: string | null
          v: string
        }
        Update: {
          dn?: string | null
          id?: string
          s?: string | null
          v?: string
        }
        Relationships: []
      }
      fest_legemiddelformkort: {
        Row: {
          dn: string | null
          id: string
          v: string
        }
        Insert: {
          dn?: string | null
          id: string
          v: string
        }
        Update: {
          dn?: string | null
          id?: string
          v?: string
        }
        Relationships: []
      }
      fest_legemiddelmerkevare: {
        Row: {
          atc_id: string | null
          id: string
          kanåpnes: string | null
          kanknuses: string | null
          legemiddelformkort_id: string | null
          navnformstyrke: string | null
          preparatomtaleavsnitt_id: string | null
          produsent: string | null
          referanseprodukt: string | null
          varenavn: string | null
          varseltrekant: string | null
        }
        Insert: {
          atc_id?: string | null
          id: string
          kanåpnes?: string | null
          kanknuses?: string | null
          legemiddelformkort_id?: string | null
          navnformstyrke?: string | null
          preparatomtaleavsnitt_id?: string | null
          produsent?: string | null
          referanseprodukt?: string | null
          varenavn?: string | null
          varseltrekant?: string | null
        }
        Update: {
          atc_id?: string | null
          id?: string
          kanåpnes?: string | null
          kanknuses?: string | null
          legemiddelformkort_id?: string | null
          navnformstyrke?: string | null
          preparatomtaleavsnitt_id?: string | null
          produsent?: string | null
          referanseprodukt?: string | null
          varenavn?: string | null
          varseltrekant?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "legemiddelmerkevare_atc_id_fkey"
            columns: ["atc_id"]
            isOneToOne: false
            referencedRelation: "fest_atc"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "legemiddelmerkevare_legemiddelformkort_id_fkey"
            columns: ["legemiddelformkort_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelformkort"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "legemiddelmerkevare_preparatomtaleavsnitt_id_fkey"
            columns: ["preparatomtaleavsnitt_id"]
            isOneToOne: false
            referencedRelation: "fest_preparatomtaleavsnitt"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_legemiddelpakning: {
        Row: {
          antall_id: string | null
          atc_id: string | null
          ddd_id: string | null
          enhetspakning_id: string | null
          id: string
          legemiddelformkort_id: string | null
          mengde_id: string | null
          navnformstyrke: string | null
          oppbevaring_id: string | null
          pakningsstr_id: string | null
          pakningstype_id: string | null
          preparattype_id: string | null
          reflegemiddelmerkevare_id: string | null
          statistikkfaktor_id: string | null
          varenr: string | null
        }
        Insert: {
          antall_id?: string | null
          atc_id?: string | null
          ddd_id?: string | null
          enhetspakning_id?: string | null
          id: string
          legemiddelformkort_id?: string | null
          mengde_id?: string | null
          navnformstyrke?: string | null
          oppbevaring_id?: string | null
          pakningsstr_id?: string | null
          pakningstype_id?: string | null
          preparattype_id?: string | null
          reflegemiddelmerkevare_id?: string | null
          statistikkfaktor_id?: string | null
          varenr?: string | null
        }
        Update: {
          antall_id?: string | null
          atc_id?: string | null
          ddd_id?: string | null
          enhetspakning_id?: string | null
          id?: string
          legemiddelformkort_id?: string | null
          mengde_id?: string | null
          navnformstyrke?: string | null
          oppbevaring_id?: string | null
          pakningsstr_id?: string | null
          pakningstype_id?: string | null
          preparattype_id?: string | null
          reflegemiddelmerkevare_id?: string | null
          statistikkfaktor_id?: string | null
          varenr?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fest_legemiddelpakning_antall_id_fkey"
            columns: ["antall_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelpakning_antall"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fest_legemiddelpakning_ddd_id_fkey"
            columns: ["ddd_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelpakning_ddd"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fest_legemiddelpakning_enhetspakning_id_fkey"
            columns: ["enhetspakning_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelpakning_enhetspakning"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fest_legemiddelpakning_mengde_id_fkey"
            columns: ["mengde_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelpakning_mengde"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fest_legemiddelpakning_pakningsstr_id_fkey"
            columns: ["pakningsstr_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelpakning_pakningsstr"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fest_legemiddelpakning_pakningstype_id_fkey"
            columns: ["pakningstype_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelpakning_pakningstype"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fest_legemiddelpakning_statistikkfaktor_id_fkey"
            columns: ["statistikkfaktor_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelpakning_statistikkfaktor"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Legemiddelpakning_atc_id_fkey"
            columns: ["atc_id"]
            isOneToOne: false
            referencedRelation: "fest_atc"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Legemiddelpakning_legemiddelformkort_id_fkey"
            columns: ["legemiddelformkort_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelformkort"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Legemiddelpakning_oppbevaring_id_fkey"
            columns: ["oppbevaring_id"]
            isOneToOne: false
            referencedRelation: "fest_oppbevaring"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Legemiddelpakning_preparattype_id_fkey"
            columns: ["preparattype_id"]
            isOneToOne: false
            referencedRelation: "fest_preparattype"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Legemiddelpakning_reflegemiddelmerkevare_id_fkey"
            columns: ["reflegemiddelmerkevare_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelpakning_reflegemiddelmerkevare"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_legemiddelpakning_antall: {
        Row: {
          antall: string | null
          id: string
          reflegemiddelpakning_id: string | null
        }
        Insert: {
          antall?: string | null
          id: string
          reflegemiddelpakning_id?: string | null
        }
        Update: {
          antall?: string | null
          id?: string
          reflegemiddelpakning_id?: string | null
        }
        Relationships: []
      }
      fest_legemiddelpakning_ddd: {
        Row: {
          id: string
          u: string | null
          v: string | null
        }
        Insert: {
          id: string
          u?: string | null
          v?: string | null
        }
        Update: {
          id?: string
          u?: string | null
          v?: string | null
        }
        Relationships: []
      }
      fest_legemiddelpakning_ean_join: {
        Row: {
          ean_id: string | null
          id: string
          legemiddelpakning_id: string
        }
        Insert: {
          ean_id?: string | null
          id: string
          legemiddelpakning_id: string
        }
        Update: {
          ean_id?: string | null
          id?: string
          legemiddelpakning_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fest_legemiddelpakning_ean_join_ean_id_fkey"
            columns: ["ean_id"]
            isOneToOne: false
            referencedRelation: "fest_ean"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fest_legemiddelpakning_ean_join_legemiddelpakning_id_fkey"
            columns: ["legemiddelpakning_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelpakning"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_legemiddelpakning_enhetspakning: {
        Row: {
          dn: string | null
          id: string
          reflegemiddelpakning_id: string | null
          s: string | null
          v: string | null
        }
        Insert: {
          dn?: string | null
          id: string
          reflegemiddelpakning_id?: string | null
          s?: string | null
          v?: string | null
        }
        Update: {
          dn?: string | null
          id?: string
          reflegemiddelpakning_id?: string | null
          s?: string | null
          v?: string | null
        }
        Relationships: []
      }
      fest_legemiddelpakning_mengde: {
        Row: {
          id: string
          mengde: string | null
          reflegemiddelpakning_id: string | null
        }
        Insert: {
          id: string
          mengde?: string | null
          reflegemiddelpakning_id?: string | null
        }
        Update: {
          id?: string
          mengde?: string | null
          reflegemiddelpakning_id?: string | null
        }
        Relationships: []
      }
      fest_legemiddelpakning_pakningsstr: {
        Row: {
          id: string
          pakningsstr: string | null
          reflegemiddelpakning_id: string | null
        }
        Insert: {
          id: string
          pakningsstr?: string | null
          reflegemiddelpakning_id?: string | null
        }
        Update: {
          id?: string
          pakningsstr?: string | null
          reflegemiddelpakning_id?: string | null
        }
        Relationships: []
      }
      fest_legemiddelpakning_pakningstype: {
        Row: {
          dn: string | null
          id: string
          reflegemiddelpakning_id: string | null
          s: string | null
          v: string | null
        }
        Insert: {
          dn?: string | null
          id: string
          reflegemiddelpakning_id?: string | null
          s?: string | null
          v?: string | null
        }
        Update: {
          dn?: string | null
          id?: string
          reflegemiddelpakning_id?: string | null
          s?: string | null
          v?: string | null
        }
        Relationships: []
      }
      fest_legemiddelpakning_reflegemiddelmerkevare: {
        Row: {
          id: string
          reflegemiddelmerkevare_id: string | null
        }
        Insert: {
          id: string
          reflegemiddelmerkevare_id?: string | null
        }
        Update: {
          id?: string
          reflegemiddelmerkevare_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "legemiddelpakning_reflegemiddelm_reflegemiddelmerkevare_id_fkey"
            columns: ["reflegemiddelmerkevare_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelmerkevare"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_legemiddelpakning_statistikkfaktor: {
        Row: {
          id: string
          reflegemiddelpakning_id: string | null
          statistikkfaktor: string | null
        }
        Insert: {
          id: string
          reflegemiddelpakning_id?: string | null
          statistikkfaktor?: string | null
        }
        Update: {
          id?: string
          reflegemiddelpakning_id?: string | null
          statistikkfaktor?: string | null
        }
        Relationships: []
      }
      fest_legemiddelvirkestoff: {
        Row: {
          atc_id: string | null
          id: string
          kanåpnes: string | null
          kanknuses: string | null
          legemiddelformkort_id: string | null
          navnformstyrke: string | null
          virkestoffmedstyrke_id: string | null
        }
        Insert: {
          atc_id?: string | null
          id: string
          kanåpnes?: string | null
          kanknuses?: string | null
          legemiddelformkort_id?: string | null
          navnformstyrke?: string | null
          virkestoffmedstyrke_id?: string | null
        }
        Update: {
          atc_id?: string | null
          id?: string
          kanåpnes?: string | null
          kanknuses?: string | null
          legemiddelformkort_id?: string | null
          navnformstyrke?: string | null
          virkestoffmedstyrke_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Legemiddelvirkestoff_atc_id_fkey"
            columns: ["atc_id"]
            isOneToOne: false
            referencedRelation: "fest_atc"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Legemiddelvirkestoff_legemiddelformkort_id_fkey"
            columns: ["legemiddelformkort_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelformkort"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Legemiddelvirkestoff_virkestoffmedstyrke_id_fkey"
            columns: ["virkestoffmedstyrke_id"]
            isOneToOne: false
            referencedRelation: "fest_virkestoffmedstyrke"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_legemiddelvirkestoff_administrasjonsvei_join: {
        Row: {
          administrasjonvei_id: string | null
          id: string
          legemiddelvirkestoff_id: string | null
        }
        Insert: {
          administrasjonvei_id?: string | null
          id: string
          legemiddelvirkestoff_id?: string | null
        }
        Update: {
          administrasjonvei_id?: string | null
          id?: string
          legemiddelvirkestoff_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "legemiddelvirkestoff_administrasjo_legemiddelvirkestoff_id_fkey"
            columns: ["legemiddelvirkestoff_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelvirkestoff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "legemiddelvirkestoff_administrasjonsv_administrasjonvei_id_fkey"
            columns: ["administrasjonvei_id"]
            isOneToOne: false
            referencedRelation: "fest_administrasjonsvei"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_legemiddelvirkestoff_bruksomradeetikett_join: {
        Row: {
          bruksomradeetiket_id: string | null
          id: string
          legemiddelvirkestoff_id: string | null
        }
        Insert: {
          bruksomradeetiket_id?: string | null
          id: string
          legemiddelvirkestoff_id?: string | null
        }
        Update: {
          bruksomradeetiket_id?: string | null
          id?: string
          legemiddelvirkestoff_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "legemiddelvirkestoff_bruksomradeet_legemiddelvirkestoff_id_fkey"
            columns: ["legemiddelvirkestoff_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelvirkestoff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "legemiddelvirkestoff_bruksomradeetike_bruksomradeetiket_id_fkey"
            columns: ["bruksomradeetiket_id"]
            isOneToOne: false
            referencedRelation: "fest_bruksomradeetikett"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_legemiddelvirkestoff_enhetsdosering_join: {
        Row: {
          enhetsdosering_id: string | null
          id: string
          legemiddelvirkestoff_id: string | null
        }
        Insert: {
          enhetsdosering_id?: string | null
          id: string
          legemiddelvirkestoff_id?: string | null
        }
        Update: {
          enhetsdosering_id?: string | null
          id?: string
          legemiddelvirkestoff_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "legemiddelvirkestoff_enhetsdoserin_legemiddelvirkestoff_id_fkey"
            columns: ["legemiddelvirkestoff_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelvirkestoff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "legemiddelvirkestoff_enhetsdosering_join_enhetsdosering_id_fkey"
            columns: ["enhetsdosering_id"]
            isOneToOne: false
            referencedRelation: "fest_enhetsdosering"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_legemiddelvirkestoff_forhandsregelinntak_join: {
        Row: {
          forhandsregelinntak_id: string | null
          id: string
          legemiddelvirkestoff_id: string | null
        }
        Insert: {
          forhandsregelinntak_id?: string | null
          id: string
          legemiddelvirkestoff_id?: string | null
        }
        Update: {
          forhandsregelinntak_id?: string | null
          id?: string
          legemiddelvirkestoff_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "legemiddelvirkestoff_forhandsregel_legemiddelvirkestoff_id_fkey"
            columns: ["legemiddelvirkestoff_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelvirkestoff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "legemiddelvirkestoff_forhandsregeli_forhandsregelinntak_id_fkey"
            columns: ["forhandsregelinntak_id"]
            isOneToOne: false
            referencedRelation: "fest_forhandsregelinntak"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_legemiddelvirkestoff_kortdose_join: {
        Row: {
          id: string
          kortdose_id: string | null
          legemiddelvirkestoff_id: string | null
        }
        Insert: {
          id: string
          kortdose_id?: string | null
          legemiddelvirkestoff_id?: string | null
        }
        Update: {
          id?: string
          kortdose_id?: string | null
          legemiddelvirkestoff_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "legemiddelvirkestoff_kortdose_join_kortdose_id_fkey1"
            columns: ["kortdose_id"]
            isOneToOne: false
            referencedRelation: "fest_kortdose"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "legemiddelvirkestoff_kortdose_join_legemiddelvirkestoff_id_fkey"
            columns: ["legemiddelvirkestoff_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelvirkestoff"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_legemiddelvirkestoff_refvirkestoffmedstyrke_join: {
        Row: {
          id: string
          legemiddelvirkestoff_id: string | null
          refvirkestoffmedstyrke_id: string | null
        }
        Insert: {
          id: string
          legemiddelvirkestoff_id?: string | null
          refvirkestoffmedstyrke_id?: string | null
        }
        Update: {
          id?: string
          legemiddelvirkestoff_id?: string | null
          refvirkestoffmedstyrke_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "legemiddelvirkestoff_refvirkesto_refvirkestoffmedstyrke_id_fkey"
            columns: ["refvirkestoffmedstyrke_id"]
            isOneToOne: false
            referencedRelation: "fest_refvirkestoffmedstyrke"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "legemiddelvirkestoff_refvirkestof_legemiddelvirkestoff_id_fkey1"
            columns: ["legemiddelvirkestoff_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelvirkestoff"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_merkevare_administrasjonsvei_join: {
        Row: {
          administrasjonsvei_id: string | null
          id: string
          legemiddelmerkevare_id: string | null
        }
        Insert: {
          administrasjonsvei_id?: string | null
          id: string
          legemiddelmerkevare_id?: string | null
        }
        Update: {
          administrasjonsvei_id?: string | null
          id?: string
          legemiddelmerkevare_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "merkevare_administrasjonsvei_join_administrasjonsvei_id_fkey"
            columns: ["administrasjonsvei_id"]
            isOneToOne: false
            referencedRelation: "fest_administrasjonsvei"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "merkevare_administrasjonsvei_join_legemiddelmerkevare_id_fkey"
            columns: ["legemiddelmerkevare_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelmerkevare"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_merkevare_bruksomradeetikett_join: {
        Row: {
          bruksomradeetikett_id: string | null
          id: string
          legemiddelmerkevare_id: string | null
        }
        Insert: {
          bruksomradeetikett_id?: string | null
          id: string
          legemiddelmerkevare_id?: string | null
        }
        Update: {
          bruksomradeetikett_id?: string | null
          id?: string
          legemiddelmerkevare_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "legemiddelmerkevare_bruksomradeetik_legemiddelmerkevare_id_fkey"
            columns: ["legemiddelmerkevare_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelmerkevare"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "merkevare_bruksomradeetikett_join_bruksomradeetikett_id_fkey"
            columns: ["bruksomradeetikett_id"]
            isOneToOne: false
            referencedRelation: "fest_bruksomradeetikett"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_merkevare_enhetsdosering_join: {
        Row: {
          enhetsdosering_id: string | null
          id: string
          legemiddelmerkevare_id: string | null
        }
        Insert: {
          enhetsdosering_id?: string | null
          id: string
          legemiddelmerkevare_id?: string | null
        }
        Update: {
          enhetsdosering_id?: string | null
          id?: string
          legemiddelmerkevare_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "merkevare_enhetsdosering_join_enhetsdosering_id_fkey"
            columns: ["enhetsdosering_id"]
            isOneToOne: false
            referencedRelation: "fest_enhetsdosering"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "merkevare_enhetsdosering_join_legemiddelmerkevare_id_fkey"
            columns: ["legemiddelmerkevare_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelmerkevare"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_merkevare_forhandsregelinntak_join: {
        Row: {
          forhandsregelinntak_id: string | null
          id: string
          legemiddelmerkevare_id: string | null
        }
        Insert: {
          forhandsregelinntak_id?: string | null
          id: string
          legemiddelmerkevare_id?: string | null
        }
        Update: {
          forhandsregelinntak_id?: string | null
          id?: string
          legemiddelmerkevare_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "legemiddelmerkevare_forhandsregelin_forhandsregelinntak_id_fkey"
            columns: ["forhandsregelinntak_id"]
            isOneToOne: false
            referencedRelation: "fest_forhandsregelinntak"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "legemiddelmerkevare_forhandsregelin_legemiddelmerkevare_id_fkey"
            columns: ["legemiddelmerkevare_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelmerkevare"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_merkevare_kortdose_join: {
        Row: {
          id: string
          kortdose_id: string | null
          legemiddelmerkevare_id: string | null
        }
        Insert: {
          id: string
          kortdose_id?: string | null
          legemiddelmerkevare_id?: string | null
        }
        Update: {
          id?: string
          kortdose_id?: string | null
          legemiddelmerkevare_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "merkevare_kortdose_join_kortdose_id_fkey"
            columns: ["kortdose_id"]
            isOneToOne: false
            referencedRelation: "fest_kortdose"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "merkevare_kortdose_join_legemiddelmerkevare_id_fkey"
            columns: ["legemiddelmerkevare_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelmerkevare"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_merkevare_refvirkestoffmedstyrke_join: {
        Row: {
          id: string
          legemiddelmerkevare_id: string | null
          refvirkestoffmedstyrke_id: string | null
        }
        Insert: {
          id: string
          legemiddelmerkevare_id?: string | null
          refvirkestoffmedstyrke_id?: string | null
        }
        Update: {
          id?: string
          legemiddelmerkevare_id?: string | null
          refvirkestoffmedstyrke_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "merkevare_refvirkestoffmedstyrke_jo_legemiddelmerkevare_id_fkey"
            columns: ["legemiddelmerkevare_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelmerkevare"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "merkevare_refvirkestoffmedstyrke_refvirkestoffmedstyrke_id_fkey"
            columns: ["refvirkestoffmedstyrke_id"]
            isOneToOne: false
            referencedRelation: "fest_refvirkestoffmedstyrke"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_oppbevaring: {
        Row: {
          dn: string | null
          id: string
          v: string | null
        }
        Insert: {
          dn?: string | null
          id: string
          v?: string | null
        }
        Update: {
          dn?: string | null
          id?: string
          v?: string | null
        }
        Relationships: []
      }
      fest_preparatomtaleavsnitt: {
        Row: {
          avsnittoverskrift_dn: string | null
          avsnittoverskrift_v: string | null
          id: string
          lenke: string | null
        }
        Insert: {
          avsnittoverskrift_dn?: string | null
          avsnittoverskrift_v?: string | null
          id: string
          lenke?: string | null
        }
        Update: {
          avsnittoverskrift_dn?: string | null
          avsnittoverskrift_v?: string | null
          id?: string
          lenke?: string | null
        }
        Relationships: []
      }
      fest_preparattype: {
        Row: {
          dn: string | null
          id: string
          v: string | null
        }
        Insert: {
          dn?: string | null
          id: string
          v?: string | null
        }
        Update: {
          dn?: string | null
          id?: string
          v?: string | null
        }
        Relationships: []
      }
      fest_refvirkestoff: {
        Row: {
          id: string
          refvirkestoff_id: string | null
        }
        Insert: {
          id: string
          refvirkestoff_id?: string | null
        }
        Update: {
          id?: string
          refvirkestoff_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fest_refvirkestoff_refvirkestoff_id_fkey"
            columns: ["refvirkestoff_id"]
            isOneToOne: false
            referencedRelation: "fest_virkestoff"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_refvirkestoff_join: {
        Row: {
          id: string
          refvirkestoff_id: string | null
          virkestoff_id: string
        }
        Insert: {
          id: string
          refvirkestoff_id?: string | null
          virkestoff_id: string
        }
        Update: {
          id?: string
          refvirkestoff_id?: string | null
          virkestoff_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "refvirkestoff_join_refvirkestoff_id_fkey"
            columns: ["refvirkestoff_id"]
            isOneToOne: false
            referencedRelation: "fest_refvirkestoff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "refvirkestoff_join_virkestoff_id_fkey"
            columns: ["virkestoff_id"]
            isOneToOne: false
            referencedRelation: "fest_virkestoff"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_refvirkestoffmedstyrke: {
        Row: {
          id: string
          refvirkestoffmedstyrke: string
        }
        Insert: {
          id: string
          refvirkestoffmedstyrke: string
        }
        Update: {
          id?: string
          refvirkestoffmedstyrke?: string
        }
        Relationships: [
          {
            foreignKeyName: "fest_refvirkestoffmedstyrke_refvirkestoffmedstyrke_fkey"
            columns: ["refvirkestoffmedstyrke"]
            isOneToOne: false
            referencedRelation: "fest_virkestoffmedstyrke"
            referencedColumns: ["id"]
          },
        ]
      }
      fest_styrke: {
        Row: {
          id: string
          u: string | null
          v: string | null
        }
        Insert: {
          id: string
          u?: string | null
          v?: string | null
        }
        Update: {
          id?: string
          u?: string | null
          v?: string | null
        }
        Relationships: []
      }
      fest_styrkenevner: {
        Row: {
          id: string
          u: string | null
          v: string | null
        }
        Insert: {
          id: string
          u?: string | null
          v?: string | null
        }
        Update: {
          id?: string
          u?: string | null
          v?: string | null
        }
        Relationships: []
      }
      fest_virkestoff: {
        Row: {
          id: string
          navn: string | null
        }
        Insert: {
          id: string
          navn?: string | null
        }
        Update: {
          id?: string
          navn?: string | null
        }
        Relationships: []
      }
      fest_virkestoffmedstyrke: {
        Row: {
          alternativ_styrkenevner_id: string | null
          atc_kombipreparat_id: string | null
          id: string
          ref_virkestoff_id: string | null
          styrke_id: string | null
          styrkenevner_id: string | null
        }
        Insert: {
          alternativ_styrkenevner_id?: string | null
          atc_kombipreparat_id?: string | null
          id: string
          ref_virkestoff_id?: string | null
          styrke_id?: string | null
          styrkenevner_id?: string | null
        }
        Update: {
          alternativ_styrkenevner_id?: string | null
          atc_kombipreparat_id?: string | null
          id?: string
          ref_virkestoff_id?: string | null
          styrke_id?: string | null
          styrkenevner_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Virkestoffmedstyrke_alternativ_styrkenevner_id_fkey"
            columns: ["alternativ_styrkenevner_id"]
            isOneToOne: false
            referencedRelation: "fest_alternativstyrkenvner"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Virkestoffmedstyrke_atc_kombipreparat_id_fkey"
            columns: ["atc_kombipreparat_id"]
            isOneToOne: false
            referencedRelation: "fest_atckombipreparat"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Virkestoffmedstyrke_ref_virkestoff_id_fkey"
            columns: ["ref_virkestoff_id"]
            isOneToOne: false
            referencedRelation: "fest_refvirkestoff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Virkestoffmedstyrke_styrke_id_fkey"
            columns: ["styrke_id"]
            isOneToOne: false
            referencedRelation: "fest_styrke"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Virkestoffmedstyrke_styrkenevner_id_fkey"
            columns: ["styrkenevner_id"]
            isOneToOne: false
            referencedRelation: "fest_styrkenevner"
            referencedColumns: ["id"]
          },
        ]
      }
      health_check_in_question: {
        Row: {
          answer_scale_id: string
          archived: boolean
          category_id: string
          created_at: string
          id: string
          label: string
          updated_at: string | null
        }
        Insert: {
          answer_scale_id: string
          archived?: boolean
          category_id: string
          created_at?: string
          id: string
          label: string
          updated_at?: string | null
        }
        Update: {
          answer_scale_id?: string
          archived?: boolean
          category_id?: string
          created_at?: string
          id?: string
          label?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      legemiddelvettregler: {
        Row: {
          created_at: string
          description: string | null
          id: number
          secondary: string | null
          source: Json | null
          title: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          secondary?: string | null
          source?: Json | null
          title?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          secondary?: string | null
          source?: Json | null
          title?: string | null
        }
        Relationships: []
      }
      medicine_closet: {
        Row: {
          created_at: string
          id: number
          name: string
          smarttag_id: number | null
          timeslot: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: never
          name: string
          smarttag_id?: number | null
          timeslot?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: never
          name?: string
          smarttag_id?: number | null
          timeslot?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "medicine_closet_smarttag_id_fkey"
            columns: ["smarttag_id"]
            isOneToOne: false
            referencedRelation: "user_smarttag"
            referencedColumns: ["id"]
          },
        ]
      }
      medicine_closet_medicine: {
        Row: {
          closet_id: number
          created_at: string
          id: number
          medicine_id: number
        }
        Insert: {
          closet_id: number
          created_at?: string
          id?: never
          medicine_id: number
        }
        Update: {
          closet_id?: number
          created_at?: string
          id?: never
          medicine_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "medicine_closet_medicine_closet_id_fkey"
            columns: ["closet_id"]
            isOneToOne: false
            referencedRelation: "medicine_closet"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medicine_closet_medicine_medicine_id_fkey"
            columns: ["medicine_id"]
            isOneToOne: false
            referencedRelation: "user_medicine"
            referencedColumns: ["id"]
          },
        ]
      }
      medicine_scheduler: {
        Row: {
          id: number
          medicine_id: number
          medicine_is_grouped: boolean | null
          medicine_name: string | null
          medicine_set_day: number | null
          medicine_timeslot_id: string | null
          notification_sent_at: string | null
        }
        Insert: {
          id?: number
          medicine_id: number
          medicine_is_grouped?: boolean | null
          medicine_name?: string | null
          medicine_set_day?: number | null
          medicine_timeslot_id?: string | null
          notification_sent_at?: string | null
        }
        Update: {
          id?: number
          medicine_id?: number
          medicine_is_grouped?: boolean | null
          medicine_name?: string | null
          medicine_set_day?: number | null
          medicine_timeslot_id?: string | null
          notification_sent_at?: string | null
        }
        Relationships: []
      }
      municipality_allowlist: {
        Row: {
          created_at: string
          id: number
          municipality_id: string | null
          municipality_name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          municipality_id?: string | null
          municipality_name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          municipality_id?: string | null
          municipality_name?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          age: number | null
          avatar_url: string | null
          full_name: string | null
          gender: string | null
          id: string
          municipality_id: string | null
          notifications_onboarded: boolean | null
          phone: string | null
          role: string | null
          share_id: string | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          age?: number | null
          avatar_url?: string | null
          full_name?: string | null
          gender?: string | null
          id: string
          municipality_id?: string | null
          notifications_onboarded?: boolean | null
          phone?: string | null
          role?: string | null
          share_id?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          age?: number | null
          avatar_url?: string | null
          full_name?: string | null
          gender?: string | null
          id?: string
          municipality_id?: string | null
          notifications_onboarded?: boolean | null
          phone?: string | null
          role?: string | null
          share_id?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      schedule_rule_timeslot: {
        Row: {
          id: number
          profile_id: string
          timeslot: string
          timeslot_from: string
          timeslot_notif_time: string
          timeslot_to: string
          timezone: string | null
        }
        Insert: {
          id?: number
          profile_id: string
          timeslot: string
          timeslot_from: string
          timeslot_notif_time: string
          timeslot_to: string
          timezone?: string | null
        }
        Update: {
          id?: number
          profile_id?: string
          timeslot?: string
          timeslot_from?: string
          timeslot_notif_time?: string
          timeslot_to?: string
          timezone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "schedule_rule_timeslot_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      scheduletimes: {
        Row: {
          time_endof: string | null
          time_startof: string
          timeofday: string
        }
        Insert: {
          time_endof?: string | null
          time_startof: string
          timeofday: string
        }
        Update: {
          time_endof?: string | null
          time_startof?: string
          timeofday?: string
        }
        Relationships: []
      }
      share_requests: {
        Row: {
          created_at: string | null
          id: string
          receiver_id: string
          requester_id: string
          responded_at: string | null
          status: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          receiver_id: string
          requester_id: string
          responded_at?: string | null
          status?: string
        }
        Update: {
          created_at?: string | null
          id?: string
          receiver_id?: string
          requester_id?: string
          responded_at?: string | null
          status?: string
        }
        Relationships: []
      }
      tags: {
        Row: {
          id: number
          tag_name: string
        }
        Insert: {
          id?: number
          tag_name: string
        }
        Update: {
          id?: number
          tag_name?: string
        }
        Relationships: []
      }
      usage_logs: {
        Row: {
          created_at: string | null
          event_type: string
          id: number
        }
        Insert: {
          created_at?: string | null
          event_type: string
          id?: number
        }
        Update: {
          created_at?: string | null
          event_type?: string
          id?: number
        }
        Relationships: []
      }
      user_health_check_in_stats: {
        Row: {
          cognitive_value: number | null
          created_at: string
          hearing_value: number | null
          id: number
          mental_health_value: number | null
          mobility_value: number | null
          nutrition_value: number | null
          sight_value: number | null
          user_id: string | null
        }
        Insert: {
          cognitive_value?: number | null
          created_at?: string
          hearing_value?: number | null
          id?: number
          mental_health_value?: number | null
          mobility_value?: number | null
          nutrition_value?: number | null
          sight_value?: number | null
          user_id?: string | null
        }
        Update: {
          cognitive_value?: number | null
          created_at?: string
          hearing_value?: number | null
          id?: number
          mental_health_value?: number | null
          mobility_value?: number | null
          nutrition_value?: number | null
          sight_value?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_health_check_in_stats_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_medicine: {
        Row: {
          archived_at: string | null
          created_at: string
          dose_per_use: string | null
          dose_total: string | null
          id: number
          legemiddelpakning_id: string | null
          medicine_type: string | null
          min_interval_hours: number | null
          notif_sent_at: string | null
          schedule: Json | null
          user_id: string | null
        }
        Insert: {
          archived_at?: string | null
          created_at?: string
          dose_per_use?: string | null
          dose_total?: string | null
          id?: number
          legemiddelpakning_id?: string | null
          medicine_type?: string | null
          min_interval_hours?: number | null
          notif_sent_at?: string | null
          schedule?: Json | null
          user_id?: string | null
        }
        Update: {
          archived_at?: string | null
          created_at?: string
          dose_per_use?: string | null
          dose_total?: string | null
          id?: number
          legemiddelpakning_id?: string | null
          medicine_type?: string | null
          min_interval_hours?: number | null
          notif_sent_at?: string | null
          schedule?: Json | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_medicine_legemiddelpakning_id_fkey"
            columns: ["legemiddelpakning_id"]
            isOneToOne: false
            referencedRelation: "fest_legemiddelpakning"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_medicine_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_medicine_intake: {
        Row: {
          id: number
          medicine_id: number
          taken_at: string
          timeslot: string
          user_id: string
        }
        Insert: {
          id?: never
          medicine_id: number
          taken_at?: string
          timeslot: string
          user_id: string
        }
        Update: {
          id?: never
          medicine_id?: number
          taken_at?: string
          timeslot?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_medicine_intake_medicine_id_fkey"
            columns: ["medicine_id"]
            isOneToOne: false
            referencedRelation: "user_medicine"
            referencedColumns: ["id"]
          },
        ]
      }
      user_shared_items: {
        Row: {
          created_at: string
          id: string
          item: string | null
          receiver_id: string | null
          share: boolean | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          item?: string | null
          receiver_id?: string | null
          share?: boolean | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          item?: string | null
          receiver_id?: string | null
          share?: boolean | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_shared_profiles: {
        Row: {
          created_at: string | null
          id: number
          owner_user_id: string | null
          revoked_at: string | null
          share_request_id: string | null
          shared_user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          owner_user_id?: string | null
          revoked_at?: string | null
          share_request_id?: string | null
          shared_user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          owner_user_id?: string | null
          revoked_at?: string | null
          share_request_id?: string | null
          shared_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_shared_profiles_share_request_id_fkey"
            columns: ["share_request_id"]
            isOneToOne: false
            referencedRelation: "share_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      user_smarttag: {
        Row: {
          created_at: string
          id: number
          name: string | null
          serial: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          serial?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          serial?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_smarttag_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_share_id: { Args: never; Returns: string }
      link_smart_tag: {
        Args: { p_closet_id: number; p_serial: number; p_user_id: string }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
