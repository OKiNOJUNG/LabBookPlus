/**
 * ============================================================================
 * MPIR Lab Ecosystem - Shared Core Library (shared-core.js)
 * State Bridge, Multimodal Audio/Haptic, Auth, SweetAlert 2.0 & Dark Mode
 * ============================================================================
 */

(function (window) {
    'use strict';

    // --- 1. Default Clean Dataset (Mitr Phol Lab Seed Data) ---
    const SEED_DATA = {
        users: [
            { id: "U-001", username: "admin@lab.com", password: "admin321", role: "admin", name: "Administrator" },
            { id: "U-002", username: "user@lab.com", password: "user123", role: "user", name: "Standard User" },
            { id: "U-003", username: "Saranyap@mitrphol.com", password: "user123", role: "user", name: "Saranya Phaengthai" },
            { id: "U-004", username: "Waranyan@mitrphol.com", password: "user123", role: "user", name: "Waranya Natesuntorn" },
            { id: "U-005", username: "Ratchaniwanj@mitrphol.com", password: "user123", role: "user", name: "Ratchaniwan Jaemsaeng" },
            { id: "U-006", username: "Prayooths@mitrphol.com", password: "user123", role: "user", name: "Prayooth Saothong" },
            { id: "U-007", username: "Chokchais@mitrphol.com", password: "user123", role: "user", name: "Chokchai Sompugdee" },
            { id: "U-008", username: "Atiyat@mitrphol.com", password: "user123", role: "user", name: "Atiya Techaparin" },
            { id: "U-009", username: "Kridsanak@mitrphol.com", password: "user123", role: "user", name: "Kridsana Krisomdee" },
            { id: "U-010", username: "Jirachayak@mitrphol.com", password: "user123", role: "user", name: "Jirachaya Klinsumalee" }
        ],
        buildings: [
            { id: 5, name: "Fermentation unit" },
            { id: 6, name: "Production Trial Unit" },
            { id: 7, name: "Analytical Lab" },
            { id: 8, name: "General Micro Lab" },
            { id: 9, name: "Preparation room" },
            { id: 10, name: "Utility" },
            { id: 11, name: "Washing room" },
            { id: 12, name: "Biosafety Level 2 (BSL2)" },
            { id: 1770461142946, name: "Micro Lab" }
        ],
        technicians: [
            "บริษัท เกรทเทค ไซเบอร์เนติกส์ จำกัด",
            "บริษัท เน็กซ์ไบโอ (ประเทศไทย) จำกัด",
            "บริษัท อัลฟา ลาวาล (ไทยแลนด์) จำกัด",
            "บริษัท บูชิ (ไทยแลนด์) จำกัด",
            "นายปรีชา ภูวโชติธนากุล",
            "ห้างหุ้นส่วนจำกัด เอ็น.วาย.อาร์",
            "บริษัท เอ็นวิชั่น แล็บซิสเต็ม จำกัด",
            "บริษัท เอส.เอ.(ขอนแก่น) จำกัด",
            "บริษัท เมทเล่อร์-โทเลโด (ประเทศไทย) จำกัด"
        ],
        reporters: [
            "Laboratory Technician",
            "Administrative Staff",
            "Saranya Phaengthai",
            "Waranya Natesuntorn",
            "Ratchaniwan Jaemsaeng",
            "Prayooth Saothong",
            "Chokchai Sompugdee",
            "Atiya Techaparin",
            "Kridsana Krisomdee",
            "Jirachaya Klinsumalee"
        ],
        equipments: [
            { id: "EQ-001", name: "Autoclave", building_id: 5, serial: "AC-5001", custodian: "Admin" },
            { id: "EQ-002", name: "50L Fermenter", building_id: 5, serial: "FM-050", custodian: "Saranya Phaengthai" },
            { id: "EQ-003", name: "500L Fermenter", building_id: 5, serial: "FM-500", custodian: "Saranya Phaengthai" },
            { id: "EQ-004", name: "750L Hot Air Oven", building_id: 5, serial: "OV-750", custodian: "Admin" },
            { id: "EQ-005", name: "500L Mixing tank", building_id: 6, serial: "MX-500", custodian: "Waranya Natesuntorn" },
            { id: "EQ-006", name: "500L Pretreatment tank", building_id: 6, serial: "PT-500", custodian: "Waranya Natesuntorn" },
            { id: "EQ-007", name: "20L Rotary evaporator", building_id: 6, serial: "RE-020", custodian: "Ratchaniwan Jaemsaeng" },
            { id: "EQ-008", name: "Falling Film Evaporator (10L/h)", building_id: 6, serial: "FFE-10", custodian: "Ratchaniwan Jaemsaeng" },
            { id: "EQ-009", name: "Mini Spray Dry (Buchi-B290)", building_id: 6, serial: "SD-290", custodian: "Kridsana Krisomdee" },
            { id: "EQ-010", name: "Pilot Spray Dry", building_id: 6, serial: "PSD-01", custodian: "Kridsana Krisomdee" },
            { id: "EQ-011", name: "Separator (Alfa Laval)", building_id: 6, serial: "AL-SEP", custodian: "Chokchai Sompugdee" },
            { id: "EQ-012", name: "Tubular centrifuge", building_id: 6, serial: "TC-01", custodian: "Chokchai Sompugdee" },
            { id: "EQ-013", name: "Sequential Simulated Moving Bed (SMB)", building_id: 6, serial: "SMB-01", custodian: "Admin" },
            { id: "EQ-014", name: "Autoclave, Hirayama", building_id: 6, serial: "HA-01", custodian: "Admin" },
            { id: "EQ-015", name: "Multi-function automatic filling machine", building_id: 6, serial: "MF-01", custodian: "Admin" },
            { id: "EQ-016", name: "Vacuum packager", building_id: 6, serial: "VP-01", custodian: "Admin" },
            { id: "EQ-017", name: "Packing machine", building_id: 6, serial: "PM-01", custodian: "Admin" },
            { id: "EQ-018", name: "Filter press", building_id: 6, serial: "FP-01", custodian: "Admin" },
            { id: "EQ-019", name: "HPLC (Waters)", building_id: 7, serial: "WAT-01", custodian: "Atiya Techaparin" },
            { id: "EQ-020", name: "Incubator Shaker (Innova)", building_id: 7, serial: "INV-01", custodian: "Atiya Techaparin" },
            { id: "EQ-021", name: "Tangential Flow Fitration (Merck)", building_id: 7, serial: "TFF-01", custodian: "Admin" },
            { id: "EQ-022", name: "Centrifuge Floor Type (Lynx4000))", building_id: 8, serial: "LX-4000", custodian: "Kridsana Krisomdee" },
            { id: "EQ-023", name: "Incubator Shaker (InfrosTH))", building_id: 8, serial: "INF-01", custodian: "Kridsana Krisomdee" },
            { id: "EQ-024", name: "Incubator (Memmert) No.1", building_id: 8, serial: "MEM-01", custodian: "Saranya Phaengthai" },
            { id: "EQ-025", name: "Incubator (Memmert) No.2", building_id: 8, serial: "MEM-02", custodian: "Saranya Phaengthai" },
            { id: "EQ-026", name: "Moisture analyzer", building_id: 8, serial: "MA-01", custodian: "Atiya Techaparin" },
            { id: "EQ-027", name: "Biosafety Cabinet", building_id: 8, serial: "BSC-01", custodian: "Kridsana Krisomdee" },
            { id: "EQ-028", name: "Spectrophotometer", building_id: 8, serial: "SPEC-01", custodian: "Atiya Techaparin" },
            { id: "EQ-029", name: "Fume hood", building_id: 9, serial: "FH-01", custodian: "Admin" },
            { id: "EQ-030", name: "Thermomixer", building_id: 9, serial: "TM-01", custodian: "Admin" },
            { id: "EQ-031", name: "UV Auto Dry Desiccator", building_id: 9, serial: "UV-01", custodian: "Admin" },
            { id: "EQ-032", name: "Boiler", building_id: 10, serial: "BL-01", custodian: "Admin" },
            { id: "EQ-033", name: "RO Water Unit", building_id: 10, serial: "RO-01", custodian: "Admin" },
            { id: "EQ-034", name: "Air Supply Unit", building_id: 10, serial: "AS-01", custodian: "Admin" },
            { id: "EQ-035", name: "Hot Air Oven (Memmert UF260))", building_id: 11, serial: "MEM-UF", custodian: "Admin" },
            { id: "EQ-036", name: "Water Purifier (Arioso UP900))", building_id: 11, serial: "ARI-900", custodian: "Kridsana Krisomdee" },
            { id: "EQ-037", name: "ICE Maker", building_id: 11, serial: "IM-01", custodian: "Admin" },
            { id: "EQ-038", name: "Freezer -80 C (Eppendorf)", building_id: 12, serial: "EPP-80", custodian: "Jirachaya Klinsumalee" },
            { id: "EQ-039", name: "Freezer -20 C (Panasonic)", building_id: 12, serial: "PAN-20", custodian: "Jirachaya Klinsumalee" },
            { id: "EQ-040", name: "Autoclave HVA110 (Hirayama)", building_id: 12, serial: "HVA-110", custodian: "Admin" },
            { id: "EQ-041", name: "Refridgerator centrifuge", building_id: 12, serial: "RC-01", custodian: "Admin" },
            { id: "EQ-042", name: "Spectrophotometer (Jenway)", building_id: 12, serial: "JEN-01", custodian: "Admin" },
            { id: "EQ-043", name: "Incubator shaker (Biosan)", building_id: 12, serial: "BIO-01", custodian: "Admin" },
            { id: "EQ-044", name: "YSI 2900D", building_id: 12, serial: "YSI-2900", custodian: "Admin" },
            { id: "EQ-045", name: "Waterless bead bath", building_id: 12, serial: "BB-01", custodian: "Admin" },
            { id: "EQ-046", name: "BSC (ESCO)", building_id: 12, serial: "ESC-01", custodian: "Kridsana Krisomdee" },
            { id: "EQ-047", name: "42 L fermenter Techfros", building_id: 12, serial: "TF-42", custodian: "Admin" },
            { id: "EQ-048", name: "Chiller for techfors", building_id: 12, serial: "CH-01", custodian: "Admin" },
            { id: "EQ-049", name: "Steam generator", building_id: 12, serial: "SG-01", custodian: "Admin" },
            { id: "EQ-050", name: "1L Multifros fermenter #1", building_id: 12, serial: "MF-101", custodian: "Admin" },
            { id: "EQ-051", name: "1L Multifros fermenter #2", building_id: 12, serial: "MF-102", custodian: "Admin" },
            { id: "EQ-052", name: "1L Multifros fermenter #3", building_id: 12, serial: "MF-103", custodian: "Admin" },
            { id: "EQ-053", name: "1L Multifros fermenter #4", building_id: 12, serial: "MF-104", custodian: "Admin" },
            { id: "EQ-054", name: "1L Multifros fermenter #5", building_id: 12, serial: "MF-105", custodian: "Admin" },
            { id: "EQ-055", name: "1L Multifros fermenter #6", building_id: 12, serial: "MF-106", custodian: "Admin" },
            { id: "EQ-056", name: "5L Minifros #1", building_id: 12, serial: "MN-501", custodian: "Admin" },
            { id: "EQ-057", name: "5L Minifros #2", building_id: 12, serial: "MN-502", custodian: "Admin" },
            { id: "EQ-058", name: "Refrigerator (MITSUBISHI)", building_id: 7, serial: "MIT-01", custodian: "Admin" },
            { id: "EQ-059", name: "Microplate Reader", building_id: 7, serial: "MPR-01", custodian: "Atiya Techaparin" },
            { id: "EQ-060", name: "Gel Doc (BioRad)", building_id: 7, serial: "GD-01", custodian: "Atiya Techaparin" },
            { id: "EQ-061", name: "Sonicator", building_id: 7, serial: "SON-01", custodian: "Admin" },
            { id: "EQ-062", name: "Water bath (Lauda)", building_id: 8, serial: "LAU-01", custodian: "Admin" },
            { id: "EQ-063", name: "Water bath (Thermo scientific)", building_id: 8, serial: "TS-01", custodian: "Admin" },
            { id: "EQ-064", name: "Microwave 1100W", building_id: 8, serial: "MW-01", custodian: "Admin" },
            { id: "EQ-065", name: "Microcentrifuge (Beckman coulter)", building_id: 8, serial: "MC-01", custodian: "Admin" },
            { id: "EQ-066", name: "3-Door Refrigerator (4C), Natural (no.1)", building_id: 6, serial: "REF-01", custodian: "Admin" },
            { id: "EQ-067", name: "3-Door Refrigerator (4C), Natural (no.2)", building_id: 6, serial: "REF-02", custodian: "Admin" },
            { id: "EQ-068", name: "Refrigerator (-20C), Haier", building_id: 6, serial: "HAI-01", custodian: "Admin" },
            { id: "EQ-069", name: "2-Door Refrigerator (4C), POL-EKO", building_id: 6, serial: "POL-01", custodian: "Admin" },
            { id: "EQ-070", name: "Water bath, Memmert", building_id: 6, serial: "MEM-WB", custodian: "Admin" },
            { id: "EQ-071", name: "Water bath, Memmert from DC", building_id: 6, serial: "MEM-DC", custodian: "Admin" },
            { id: "EQ-072", name: "Analytical Balance 60 kg, Mettler-toledo", building_id: 6, serial: "BAL-60", custodian: "Admin" },
            { id: "EQ-073", name: "Centrifuge from New business, Hermle", building_id: 6, serial: "CEN-NB", custodian: "Admin" },
            { id: "EQ-074", name: "Overhead stirrer, IKA Eurostar 200", building_id: 6, serial: "IKA-200", custodian: "Admin" },
            { id: "EQ-075", name: "Air Conditioner, Carrier 60,000 BTU no.1", building_id: 6, serial: "AC-601", custodian: "Admin" },
            { id: "EQ-076", name: "Air Conditioner, Carrier 60,000 BTU no.2", building_id: 6, serial: "AC-602", custodian: "Admin" },
            { id: "EQ-077", name: "Air Conditioner, Carrier 60,000 BTU no.3", building_id: 6, serial: "AC-603", custodian: "Admin" },
            { id: "EQ-078", name: "Peristaltic pump (Lab F6), Shenchen no.1", building_id: 6, serial: "PP-F61", custodian: "Admin" },
            { id: "EQ-079", name: "Peristaltic pump (Lab F6), Shenchen no.2", building_id: 6, serial: "PP-F62", custodian: "Admin" },
            { id: "EQ-080", name: "Peristaltic pump (Lab F6), Shenchen no.3", building_id: 6, serial: "PP-F63", custodian: "Admin" },
            { id: "EQ-081", name: "Peristaltic pump (Lab F6), Shenchen no.4", building_id: 6, serial: "PP-F64", custodian: "Admin" },
            { id: "EQ-082", name: "Peristaltic pump (Lab F6), Shenchen no.5", building_id: 6, serial: "PP-F65", custodian: "Admin" },
            { id: "EQ-083", name: "Peristaltic pump (Lab N3), Shenchen no.1", building_id: 6, serial: "PP-N31", custodian: "Admin" },
            { id: "EQ-084", name: "Peristaltic pump (Lab N3), Shenchen no.2", building_id: 6, serial: "PP-N32", custodian: "Admin" },
            { id: "EQ-085", name: "Peristaltic pump (Lab N3), Shenchen no.3", building_id: 6, serial: "PP-N33", custodian: "Admin" },
            { id: "EQ-086", name: "Peristaltic pump (BT101F) from N'Ae", building_id: 6, serial: "PP-AE", custodian: "Admin" },
            { id: "EQ-087", name: "Spray dry (ฺB-290)", building_id: 1770461142946, serial: "SD-ML", custodian: "Kridsana Krisomdee" },
            { id: "EQ-088", name: "Refrigerator, Panasonic", building_id: 1770461142946, serial: "PAN-ML", custodian: "Kridsana Krisomdee" },
            { id: "EQ-089", name: "Rotary evaporator, Eyela", building_id: 1770461142946, serial: "EYE-ML", custodian: "Kridsana Krisomdee" },
            { id: "EQ-090", name: "pH & CD meter", building_id: 6, serial: "PH-CD", custodian: "Admin" }
        ],
        records: [
            { id: 1770458821533, equipment_name: "Pilot Spray Dry", building: "Production Trial Unit", type: "calibration", service_date: "2024-07-16", next_service_date: "2026-07-16", maintenance_cost: "8000", technicians: ["บริษัท เกรทเทค ไซเบอร์เนติกส์ จำกัด"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "", additional_files: ["Demo_Manual_v1.pdf", "Calibration_Cert.pdf"] },
            { id: 1770459393734, equipment_name: "Water Purifier (Arioso UP900))", building: "Washing room", type: "repair", service_date: "2024-07-24", next_service_date: "2025-08-07", maintenance_cost: "15300", technicians: ["บริษัท เน็กซ์ไบโอ (ประเทศไทย) จำกัด"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" },
            { id: 1770459648390, equipment_name: "Water Purifier (Arioso UP900))", building: "Washing room", type: "repair", service_date: "2025-08-07", next_service_date: "", maintenance_cost: "29200", technicians: ["บริษัท เน็กซ์ไบโอ (ประเทศไทย) จำกัด"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" },
            { id: 1770459871942, equipment_name: "Water Purifier (Arioso UP900))", building: "Washing room", type: "repair", service_date: "2025-03-31", next_service_date: "", maintenance_cost: "51100", technicians: ["บริษัท เน็กซ์ไบโอ (ประเทศไทย) จำกัด"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" },
            { id: 1770460540632, equipment_name: "Water Purifier (Arioso UP900))", building: "Washing room", type: "repair", service_date: "2025-11-17", next_service_date: "", maintenance_cost: "6650", technicians: ["บริษัท เน็กซ์ไบโอ (ประเทศไทย) จำกัด"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" },
            { id: 1770460788184, equipment_name: "Separator (Alfa Laval)", building: "Production Trial Unit", type: "calibration", service_date: "2024-06-18", next_service_date: "2026-06-18", maintenance_cost: "93000", technicians: ["บริษัท อัลฟา ลาวาล (ไทยแลนด์) จำกัด"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" },
            { id: 1770461421061, equipment_name: "Spray dry (ฺB-290)", building: "Micro Lab", type: "repair", service_date: "2025-07-09", next_service_date: "", maintenance_cost: "5200", technicians: ["บริษัท บูชิ (ไทยแลนด์) จำกัด"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" },
            { id: 1770461915055, equipment_name: "Refrigerator, Panasonic", building: "Micro Lab", type: "repair", service_date: "2025-04-03", next_service_date: "", maintenance_cost: "3400", technicians: ["นายปรีชา ภูวโชติธนากุล"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" },
            { id: 1770462031456, equipment_name: "3-Door Refrigerator (4C), Natural (no.2)", building: "Production Trial Unit", type: "repair", service_date: "2025-03-13", next_service_date: "", maintenance_cost: "9000", technicians: ["นายปรีชา ภูวโชติธนากุล"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" },
            { id: 1770462398376, equipment_name: "Centrifuge Floor Type (Lynx4000))", building: "General Micro Lab", type: "repair", service_date: "2024-08-07", next_service_date: "", maintenance_cost: "290000", technicians: ["ห้างหุ้นส่วนจำกัด เอ็น.วาย.อาร์"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" },
            { id: 1770462497841, equipment_name: "Centrifuge Floor Type (Lynx4000))", building: "General Micro Lab", type: "repair", service_date: "2024-08-09", next_service_date: "", maintenance_cost: "349245", technicians: ["บริษัท เอ็นวิชั่น แล็บซิสเต็ม จำกัด"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" },
            { id: 1770462803655, equipment_name: "Rotary evaporator, Eyela", building: "Micro Lab", type: "repair", service_date: "2024-12-12", next_service_date: "", maintenance_cost: "28000", technicians: ["บริษัท เอส.เอ.(ขอนแก่น) จำกัด"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" },
            { id: 1770462917214, equipment_name: "Rotary evaporator, Eyela", building: "Micro Lab", type: "repair", service_date: "2025-06-19", next_service_date: "", maintenance_cost: "14800", technicians: ["บริษัท เอส.เอ.(ขอนแก่น) จำกัด"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" },
            { id: 1770463587072, equipment_name: "pH & CD meter", building: "Production Trial Unit", type: "repair", service_date: "2025-01-31", next_service_date: "", maintenance_cost: "1475", technicians: ["บริษัท เมทเล่อร์-โทเลโด (ประเทศไทย) จำกัด"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" },
            { id: 1770464269413, equipment_name: "Moisture analyzer", building: "General Micro Lab", type: "calibration", service_date: "2025-10-16", next_service_date: "2026-10-16", maintenance_cost: "14590", technicians: ["บริษัท เมทเล่อร์-โทเลโด (ประเทศไทย) จำกัด"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" },
            { id: 1770464690031, equipment_name: "Pilot Spray Dry", building: "Production Trial Unit", type: "calibration", service_date: "2023-07-06", next_service_date: "2024-07-06", maintenance_cost: "16500", technicians: ["บริษัท เกรทเทค ไซเบอร์เนติกส์ จำกัด"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" },
            { id: 1770465149396, equipment_name: "Separator (Alfa Laval)", building: "Production Trial Unit", type: "calibration", service_date: "2023-02-16", next_service_date: "2024-02-16", maintenance_cost: "99278", technicians: ["บริษัท อัลฟา ลาวาล (ไทยแลนด์) จำกัด"], reporter: "Kridsana Krisomdee", calendar_status: "complete", po_file: "" }
        ],
        bookings: [
            {
                id: "BK-1001",
                equipmentId: "EQ-001",
                user: "Saranya Phaengthai",
                userEmail: "Saranyap@mitrphol.com",
                start: new Date(Date.now() - 3600000 * 4).toISOString(),
                end: new Date(Date.now() - 3600000 * 2).toISOString(),
                status: "completed",
                purpose: "Sterilization of media for fermentation batch #A4"
            },
            {
                id: "BK-1002",
                equipmentId: "EQ-002",
                user: "Waranya Natesuntorn",
                userEmail: "Waranyan@mitrphol.com",
                start: new Date(Date.now() - 3600000).toISOString(),
                end: new Date(Date.now() + 3600000 * 3).toISOString(),
                status: "in-use",
                purpose: "50L Pilot Yeast culture run"
            }
        ],
        auditLogs: []
    };

    // --- 1.5 High-Ratio Document & PDF Compressor (LabCompressor) ---
    const LabCompressor = {
        isSupported() {
            return typeof CompressionStream !== 'undefined' && typeof DecompressionStream !== 'undefined';
        },

        base64ToBytes(base64) {
            const binStr = atob(base64);
            const len = binStr.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binStr.charCodeAt(i);
            }
            return bytes;
        },

        bytesToBase64(bytes) {
            let binStr = '';
            const len = bytes.byteLength;
            const chunkSize = 16384;
            for (let i = 0; i < len; i += chunkSize) {
                binStr += String.fromCharCode.apply(null, bytes.subarray(i, Math.min(i + chunkSize, len)));
            }
            return btoa(binStr);
        },

        async compressDataUrl(dataUrl, fileName = 'file') {
            if (!dataUrl || typeof dataUrl !== 'string') return { name: fileName, data: '' };
            if (!dataUrl.startsWith('data:')) {
                return { name: fileName, compressed: false, data: dataUrl };
            }

            const commaIdx = dataUrl.indexOf(',');
            const header = dataUrl.substring(0, commaIdx);
            const base64 = dataUrl.substring(commaIdx + 1);
            const mimeMatch = header.match(/:(.*?);/);
            const mimeType = mimeMatch ? mimeMatch[1] : 'application/pdf';

            if (!this.isSupported()) {
                return {
                    name: fileName,
                    compressed: false,
                    mimeType,
                    data: dataUrl
                };
            }

            try {
                const rawBytes = this.base64ToBytes(base64);
                const origSize = rawBytes.length;

                const cs = new CompressionStream('gzip');
                const writer = cs.writable.getWriter();
                writer.write(rawBytes);
                writer.close();

                const compBuffer = await new Response(cs.readable).arrayBuffer();
                const compBytes = new Uint8Array(compBuffer);
                const compSize = compBytes.length;

                const compBase64 = this.bytesToBase64(compBytes);
                const ratioNum = origSize > 0 ? Math.round((1 - compSize / origSize) * 100) : 0;
                const ratio = (ratioNum > 0 ? ratioNum : 0) + '%';

                return {
                    name: fileName,
                    compressed: true,
                    format: 'gzip',
                    mimeType,
                    origSize,
                    compSize,
                    ratio,
                    data: compBase64
                };
            } catch (err) {
                console.warn("[LabCompressor] Compression fallback:", err);
                return {
                    name: fileName,
                    compressed: false,
                    mimeType,
                    data: dataUrl
                };
            }
        },

        async decompressToDataUrl(fileObj) {
            if (!fileObj) return '';
            if (typeof fileObj === 'string') return fileObj;

            if (!fileObj.compressed) {
                return fileObj.data || '';
            }

            if (fileObj.format === 'gzip' && this.isSupported()) {
                try {
                    const compBytes = this.base64ToBytes(fileObj.data);
                    const ds = new DecompressionStream('gzip');
                    const writer = ds.writable.getWriter();
                    writer.write(compBytes);
                    writer.close();

                    const decompBuffer = await new Response(ds.readable).arrayBuffer();
                    const decompBytes = new Uint8Array(decompBuffer);
                    const decompBase64 = this.bytesToBase64(decompBytes);
                    return `data:${fileObj.mimeType || 'application/pdf'};base64,${decompBase64}`;
                } catch (err) {
                    console.error("[LabCompressor] Decompression error:", err);
                    return fileObj.data || '';
                }
            }

            return fileObj.data || '';
        }
    };

    // --- 2. IndexedDB PO Attachments Storage (LabPoStorage) ---
    const LabPoStorage = {
        IDB_NAME: 'CarePlusStorage',
        IDB_STORE: 'poFiles',

        open() {
            return new Promise((resolve) => {
                if (typeof indexedDB === 'undefined') { resolve(null); return; }
                const req = indexedDB.open(this.IDB_NAME, 1);
                req.onupgradeneeded = (e) => {
                    const db = e.target.result;
                    if (!db.objectStoreNames.contains(this.IDB_STORE)) {
                        db.createObjectStore(this.IDB_STORE);
                    }
                };
                req.onsuccess = (e) => resolve(e.target.result);
                req.onerror = (e) => {
                    console.warn("LabPoStorage open error:", e);
                    resolve(null);
                };
            });
        },

        async getAll() {
            const db = await this.open();
            if (!db) return {};
            return new Promise((resolve) => {
                try {
                    const tx = db.transaction(this.IDB_STORE, 'readonly');
                    const store = tx.objectStore(this.IDB_STORE);
                    const res = {};
                    const req = store.openCursor();
                    req.onsuccess = (e) => {
                        const cursor = e.target.result;
                        if (cursor) {
                            const val = cursor.value;
                            res[String(cursor.key)] = val;
                            if (!isNaN(Number(cursor.key))) {
                                res[Number(cursor.key)] = val;
                            }
                            cursor.continue();
                        } else {
                            resolve(res);
                        }
                    };
                    req.onerror = () => resolve({});
                } catch (e) {
                    resolve({});
                }
            });
        },

        async save(id, files) {
            if (!id || !files) return;
            const db = await this.open();
            if (!db) return;
            try {
                const tx = db.transaction(this.IDB_STORE, 'readwrite');
                const store = tx.objectStore(this.IDB_STORE);
                store.put(files, String(id));
                if (!isNaN(Number(id))) {
                    store.put(files, Number(id));
                }
            } catch (e) {
                console.warn('LabPoStorage.save error:', e);
            }
        },

        async saveMany(dict) {
            if (!dict || typeof dict !== 'object') return;
            const db = await this.open();
            if (!db) return;
            try {
                const tx = db.transaction(this.IDB_STORE, 'readwrite');
                const store = tx.objectStore(this.IDB_STORE);
                for (const [k, v] of Object.entries(dict)) {
                    store.put(v, String(k));
                    if (!isNaN(Number(k))) {
                        store.put(v, Number(k));
                    }
                }
            } catch (e) {
                console.warn('LabPoStorage.saveMany error:', e);
            }
        },

        async delete(id) {
            const db = await this.open();
            if (!db) return;
            try {
                const tx = db.transaction(this.IDB_STORE, 'readwrite');
                const store = tx.objectStore(this.IDB_STORE);
                store.delete(String(id));
                if (!isNaN(Number(id))) {
                    store.delete(Number(id));
                }
            } catch (e) {
                console.warn('LabPoStorage.delete error:', e);
            }
        },

        async deleteKeys(keys) {
            if (!Array.isArray(keys) || keys.length === 0) return;
            const db = await this.open();
            if (!db) return;
            try {
                const tx = db.transaction(this.IDB_STORE, 'readwrite');
                const store = tx.objectStore(this.IDB_STORE);
                keys.forEach(k => {
                    store.delete(k);
                    if (!isNaN(Number(k))) store.delete(Number(k));
                    store.delete(String(k));
                });
            } catch (e) {
                console.warn('LabPoStorage.deleteKeys error:', e);
            }
        }
    };

    // --- 3. Centralized State Bridge (LabStateBridge) ---
    const STORAGE_KEY = 'NoteLabState_Merged';

    const LabStateBridge = {
        getState() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                let state = raw ? JSON.parse(raw) : null;

                if (!state || typeof state !== 'object') {
                    state = JSON.parse(JSON.stringify(SEED_DATA));
                    this.saveState(state, true); // skipCloud = true: prevent blank client from overwriting cloud
                    return state;
                }

                // Harmonize & fill missing arrays without clobbering
                let modified = false;

                if (!Array.isArray(state.users) || state.users.length === 0) {
                    state.users = JSON.parse(JSON.stringify(SEED_DATA.users));
                    modified = true;
                } else {
                    state.users.forEach(u => { if (u && u.activeSession) { delete u.activeSession; modified = true; } });
                }
                if (!Array.isArray(state.buildings) || state.buildings.length === 0) {
                    state.buildings = JSON.parse(JSON.stringify(SEED_DATA.buildings));
                    modified = true;
                }
                // Handle equipment / equipments synonym
                let eqList = state.equipments || state.equipment;
                if (!Array.isArray(eqList) || eqList.length === 0) {
                    eqList = JSON.parse(JSON.stringify(SEED_DATA.equipments));
                    modified = true;
                }
                // Standardize equipment items (ensure String ID to prevent startsWith crash)
                eqList.forEach((e, idx) => {
                    if (!e || typeof e !== 'object') return;
                    if (!e.id) e.id = 'EQ-' + String(idx + 1).padStart(3, '0');
                    else e.id = String(e.id);
                    if (!e.model) e.model = '-';
                    if (!e.serial) e.serial = 'N/A';
                    if (!e.custodian) e.custodian = 'Admin';
                });
                state.equipments = eqList;
                state.equipment = eqList; // keep synonym in sync

                if (!Array.isArray(state.records) || state.records.length === 0) {
                    state.records = JSON.parse(JSON.stringify(SEED_DATA.records || []));
                    modified = true;
                }
                if (!Array.isArray(state.technicians) || state.technicians.length === 0) {
                    state.technicians = JSON.parse(JSON.stringify(SEED_DATA.technicians));
                    modified = true;
                }
                if (!Array.isArray(state.reporters) || state.reporters.length === 0) {
                    state.reporters = JSON.parse(JSON.stringify(SEED_DATA.reporters));
                    modified = true;
                }
                if (!Array.isArray(state.bookings)) {
                    state.bookings = JSON.parse(JSON.stringify(SEED_DATA.bookings || []));
                    modified = true;
                }
                if (!Array.isArray(state.auditLogs)) {
                    try {
                        const legacyAudit = localStorage.getItem('carePlusAuditLog');
                        state.auditLogs = legacyAudit ? JSON.parse(legacyAudit) : [];
                    } catch (e) {
                        state.auditLogs = [];
                    }
                    modified = true;
                }
                // Harmonize booking equipment identifiers (both eqId and equipmentId) and resolve equipmentName
                state.bookings.forEach(b => {
                    if (!b || typeof b !== 'object') return;
                    const resolvedEqId = b.eqId || b.equipmentId;
                    if (resolvedEqId) {
                        if (!b.eqId) { b.eqId = String(resolvedEqId); modified = true; }
                        if (!b.equipmentId) { b.equipmentId = String(resolvedEqId); modified = true; }
                    }
                    if (!b.equipmentName || b.equipmentName === 'Unknown') {
                        const targetId = String(resolvedEqId || '');
                        let match = eqList.find(e => String(e.id) === targetId);
                        if (!match && targetId) {
                            const numOnly = targetId.replace(/\D/g, '');
                            if (numOnly) {
                                match = eqList.find(e => String(e.id).replace(/\D/g, '') === numOnly);
                            }
                        }
                        if (match && match.name) {
                            b.equipmentName = match.name;
                            modified = true;
                        } else if (b.equipment && typeof b.equipment === 'string') {
                            b.equipmentName = b.equipment;
                            modified = true;
                        }
                    }
                });

                if (modified) {
                    this.saveState(state, true);
                }

                return state;
            } catch (err) {
                console.error("LabStateBridge.getState error, restoring seed:", err);
                const fresh = JSON.parse(JSON.stringify(SEED_DATA));
                this.saveState(fresh, true);
                return fresh;
            }
        },

        _syncTimeout: null,
        flushSync() {
            if (this._syncTimeout) {
                clearTimeout(this._syncTimeout);
                this._syncTimeout = null;
            }
            if (window.LabFirebase && LabFirebase.isConfigured()) {
                const current = this.getStateInternal();
                LabFirebase.syncToCloud(current);
            }
        },
        saveState(partialOrFull, skipCloud = false) {
            try {
                const current = this.getStateInternal();
                const merged = Object.assign({}, current, partialOrFull);

                // Ensure equipment synonym stays bidirectional
                if (partialOrFull.equipments) merged.equipment = partialOrFull.equipments;
                if (partialOrFull.equipment) merged.equipments = partialOrFull.equipment;

                // Never store massive blobs into localStorage
                delete merged.poFilesDb;

                localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));

                // Auto-sync to Firebase Cloud
                if (!skipCloud && window.LabFirebase && LabFirebase.isConfigured()) {
                    if (this._syncTimeout) clearTimeout(this._syncTimeout);
                    this._syncTimeout = setTimeout(() => {
                        LabFirebase.syncToCloud(merged);
                    }, 250);
                }

                return merged;
            } catch (err) {
                console.error("LabStateBridge.saveState error:", err);
                return null;
            }
        },

        saveStateFromRemote(remoteData) {
            return this.saveState(remoteData, true); // skipCloud = true to prevent echo loop
        },

        getStateInternal() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(SEED_DATA));
            } catch (e) {
                return JSON.parse(JSON.stringify(SEED_DATA));
            }
        },

        listen(callback) {
            window.addEventListener('storage', (e) => {
                if (e.key === STORAGE_KEY || e.key === 'labUserSession') {
                    callback(this.getState(), e.key);
                }
            });
        },

        // --- Unified Backup: Exports complete state from both Lab Book+ and Lab Care+ ---
        async exportCombinedBackup() {
            try {
                const state = this.getState();
                let poFilesDb = await LabPoStorage.getAll();

                // Ensure all attachments in poFilesDb are in maximum compressed format
                if (poFilesDb && typeof poFilesDb === 'object') {
                    for (const [rid, fList] of Object.entries(poFilesDb)) {
                        if (Array.isArray(fList)) {
                            for (let i = 0; i < fList.length; i++) {
                                const f = fList[i];
                                if (f && f.data && !f.compressed) {
                                    const comp = await LabCompressor.compressDataUrl(f.data, f.name);
                                    fList[i] = {
                                        name: f.name,
                                        compressed: comp.compressed,
                                        format: comp.format,
                                        mimeType: comp.mimeType,
                                        origSize: comp.origSize,
                                        compSize: comp.compSize,
                                        ratio: comp.ratio,
                                        data: comp.data
                                    };
                                }
                            }
                        }
                    }
                }

                // Also merge any bookings, records, master data, or attachments stored in Cloud Firebase
                if (window.LabFirebase && LabFirebase.isConfigured()) {
                    try {
                        const cloudState = await LabFirebase.fetchStateFromCloud();
                        if (cloudState) {
                            if (Array.isArray(cloudState.bookings) && cloudState.bookings.length > 0) {
                                const curBookings = state.bookings || [];
                                const existingIds = new Set(curBookings.map(b => b.id));
                                cloudState.bookings.forEach(cb => {
                                    if (!existingIds.has(cb.id)) {
                                        curBookings.push(cb);
                                    }
                                });
                                state.bookings = curBookings;
                            }
                            if (Array.isArray(cloudState.records) && cloudState.records.length > 0) {
                                const curRecords = state.records || [];
                                const existingRecIds = new Set(curRecords.map(r => r.id));
                                cloudState.records.forEach(cr => {
                                    if (!existingRecIds.has(cr.id)) {
                                        curRecords.push(cr);
                                    }
                                });
                                state.records = curRecords;
                            }
                            const cloudEquip = Array.isArray(cloudState.equipments) ? cloudState.equipments : (Array.isArray(cloudState.equipment) ? cloudState.equipment : null);
                            if (cloudEquip && cloudEquip.length > 0) {
                                const curEq = state.equipments || state.equipment || [];
                                const eqMap = new Map();
                                curEq.forEach(e => { if (e && e.id) eqMap.set(String(e.id), e); });
                                cloudEquip.forEach(e => { if (e && e.id && !eqMap.has(String(e.id))) eqMap.set(String(e.id), e); });
                                state.equipments = Array.from(eqMap.values());
                                state.equipment = state.equipments;
                            }
                            if (Array.isArray(cloudState.auditLogs) && cloudState.auditLogs.length > 0) {
                                const curAud = state.auditLogs || [];
                                const audMap = new Map();
                                curAud.forEach(a => { if (a && a.id) audMap.set(String(a.id), a); });
                                cloudState.auditLogs.forEach(a => { if (a && a.id) audMap.set(String(a.id), a); });
                                state.auditLogs = Array.from(audMap.values()).sort((x, y) => new Date(y.timestamp) - new Date(x.timestamp));
                            }
                        }
                        const cloudAttachments = await LabFirebase.fetchAllAttachmentsFromCloud();
                        poFilesDb = { ...cloudAttachments, ...poFilesDb };
                    } catch (e) {
                        console.warn("[LabStateBridge] Remote state merge notice:", e);
                    }
                }

                const currentUser = LabAuth.getCurrentUser();

                const exportEquipments = (state.equipments || state.equipment || []).map(eq => ({
                    ...eq,
                    id: String(eq.id),
                    name: eq.name || '',
                    model: (eq.model !== undefined && eq.model !== null && String(eq.model).trim() !== '') ? String(eq.model).trim() : '-',
                    building_id: eq.building_id || eq.location_id || 1,
                    serial: eq.serial || '-',
                    custodian: eq.custodian || '-'
                }));

                const auditData = (Array.isArray(state.auditLogs) && state.auditLogs.length > 0)
                    ? state.auditLogs
                    : (() => { try { return JSON.parse(localStorage.getItem('carePlusAuditLog') || '[]'); } catch { return []; } })();

                const backupPayload = {
                    metadata: {
                        system: "Lab Book+ & Lab Care+ Unified Enterprise",
                        version: "2.1-unified",
                        exportedAt: new Date().toISOString(),
                        exportedBy: currentUser ? currentUser.username : 'admin',
                        totalBookings: (state.bookings || []).length,
                        totalRecords: (state.records || []).length,
                        totalEquipments: exportEquipments.length,
                        attachmentsCompressed: true
                    },
                    // Master Data
                    users: state.users || [],
                    buildings: state.buildings || [],
                    equipments: exportEquipments,
                    equipment: exportEquipments,
                    technicians: state.technicians || [],
                    reporters: state.reporters || [],
                    timeSlots: state.timeSlots || [],
                    dynamicFields: state.dynamicFields || {},
                    settings: state.settings || {},
                    // User Transactions
                    bookings: state.bookings || [],
                    records: state.records || [],
                    // Care+ Audit Log (saved under both keys for maximum compatibility)
                    carePlusAuditLog: auditData,
                    auditLogs: auditData,
                    // Compressed Attachments from IndexedDB & Cloud (saved under both keys)
                    poFilesDb: poFilesDb || {},
                    poFiles: poFilesDb || {}
                };

                const jsonStr = JSON.stringify(backupPayload, null, 2);
                const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                const dateTag = new Date().toISOString().split('T')[0];
                a.href = url;
                a.download = `LabSuite_Unified_Backup_${dateTag}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                setTimeout(() => URL.revokeObjectURL(url), 2000);
                LabAlert.toast('success', 'สำรองข้อมูลรวมทั้ง 2 ระบบ (พร้อมบีบอัดไฟล์แนบ) เรียบร้อยแล้ว');
                return true;
            } catch (err) {
                console.error("exportCombinedBackup error:", err);
                LabAlert.error('เกิดข้อผิดพลาดในการสร้างไฟล์สำรองข้อมูล', 'Backup Failed');
                return false;
            }
        },

        // --- Unified Restore: Imports data from unified JSON or legacy backups ---
        async importCombinedBackup(fileOrJson, onSuccess) {
            try {
                let payload = null;
                if (typeof fileOrJson === 'string') {
                    payload = JSON.parse(fileOrJson);
                } else if (fileOrJson instanceof File) {
                    const text = await fileOrJson.text();
                    payload = JSON.parse(text);
                } else if (typeof fileOrJson === 'object' && fileOrJson !== null) {
                    payload = fileOrJson;
                } else {
                    throw new Error("รูปแบบไฟล์ไม่ถูกต้อง");
                }

                const hasUsers = payload.users && (Array.isArray(payload.users) || typeof payload.users === 'object');
                const hasEquip = payload.equipments || payload.equipment;
                const hasRecords = Array.isArray(payload.records);
                const hasBookings = Array.isArray(payload.bookings);

                if (!hasUsers && !hasEquip && !hasRecords && !hasBookings) {
                    throw new Error("โครงสร้างไฟล์ JSON ไม่ใช่ข้อมูลของระบบ Lab Suite");
                }

                const currentState = this.getState();

                // 1. Normalize Users
                let importedUsers = [];
                if (Array.isArray(payload.users)) {
                    importedUsers = payload.users;
                } else if (payload.users && typeof payload.users === 'object') {
                    importedUsers = Object.entries(payload.users).map(([k, v], idx) => ({
                        id: v.id || idx + 1,
                        username: k,
                        password: v.password || 'user123',
                        role: v.role || 'user',
                        name: v.name || k.split('@')[0]
                    }));
                } else {
                    importedUsers = currentState.users || [];
                }

                // 2. Normalize Equipments
                let rawImportedEquip = payload.equipments || payload.equipment || [];
                let importedEquip = [];
                if (Array.isArray(rawImportedEquip) && rawImportedEquip.length > 0) {
                    importedEquip = rawImportedEquip;
                } else if (Array.isArray(currentState.equipments) && currentState.equipments.length > 0) {
                    importedEquip = currentState.equipments;
                } else if (Array.isArray(currentState.equipment) && currentState.equipment.length > 0) {
                    importedEquip = currentState.equipment;
                }
                importedEquip.forEach((eq, i) => {
                    if (!eq.id) eq.id = 'EQ-' + String(i + 1).padStart(3, '0');
                    else eq.id = String(eq.id);
                    if (eq.model === undefined || eq.model === null || String(eq.model).trim() === '') eq.model = '-';
                    if (!eq.serial) eq.serial = '-';
                    if (!eq.custodian) eq.custodian = 'Admin';
                });

                // 3. Buildings, Techs, Reporters
                const importedBuildings = payload.buildings || currentState.buildings || [];
                const importedTechs = payload.technicians || currentState.technicians || [];
                const importedReps = payload.reporters || currentState.reporters || [];
                const importedTimeSlots = payload.timeSlots || currentState.timeSlots || [];
                const importedDynFields = payload.dynamicFields || currentState.dynamicFields || {};

                // 4. User Transactions: Bookings & Records (Careful merge so neither system's data is wiped)
                let importedBookings = [];
                if (Array.isArray(payload.bookings) && payload.bookings.length > 0) {
                    importedBookings = payload.bookings;
                } else if (Array.isArray(currentState.bookings) && currentState.bookings.length > 0) {
                    importedBookings = currentState.bookings;
                }

                let importedRecords = [];
                if (Array.isArray(payload.records) && payload.records.length > 0) {
                    importedRecords = payload.records;
                } else if (Array.isArray(currentState.records) && currentState.records.length > 0) {
                    importedRecords = currentState.records;
                }

                // 4.5 Audit Log
                const importedAudit = Array.isArray(payload.auditLogs) && payload.auditLogs.length > 0
                    ? payload.auditLogs
                    : (Array.isArray(payload.carePlusAuditLog) ? payload.carePlusAuditLog : (currentState.auditLogs || []));

                // 5. Build merged state
                const newState = {
                    ...currentState,
                    users: importedUsers,
                    equipments: importedEquip,
                    equipment: importedEquip,
                    buildings: importedBuildings,
                    technicians: importedTechs,
                    reporters: importedReps,
                    timeSlots: importedTimeSlots,
                    dynamicFields: importedDynFields,
                    bookings: importedBookings,
                    records: importedRecords,
                    auditLogs: importedAudit
                };

                // Save to central localStorage
                this.saveState(newState);

                // 6. Restore PO Files to IndexedDB if present
                const poFiles = payload.poFilesDb || payload.poFiles;
                if (poFiles && typeof poFiles === 'object') {
                    await LabPoStorage.saveMany(poFiles);

                    // Also sync restored attachments to Cloud Firebase if active
                    if (window.LabFirebase && LabFirebase.isConfigured()) {
                        for (const [rid, fList] of Object.entries(poFiles)) {
                            if (Array.isArray(fList) && fList.length > 0) {
                                await LabFirebase.syncAttachmentToCloud(rid, fList);
                            }
                        }
                    }
                }

                // Sync to Cloud if Firebase is active
                if (window.LabFirebase && LabFirebase.isConfigured()) {
                    LabFirebase.syncToCloud(newState);
                }

                LabHaptic.success();

                // Restore Care+ Audit Log if present in backup
                if (Array.isArray(importedAudit) && importedAudit.length > 0) {
                    localStorage.setItem('carePlusAuditLog', JSON.stringify(importedAudit));
                }

                LabAlert.toast('success', `นำเข้าข้อมูลเรียบร้อยแล้ว (การจอง: ${importedBookings.length} รายการ, การซ่อม: ${importedRecords.length} รายการ)`);

                if (typeof onSuccess === 'function') {
                    onSuccess(newState);
                } else {
                    setTimeout(() => location.reload(), 800);
                }
                return true;
            } catch (err) {
                console.error("importCombinedBackup error:", err);
                LabAlert.error(`เกิดข้อผิดพลาด: ${err.message || 'โครงสร้างไฟล์ไม่ถูกต้อง'}`, 'นำเข้าข้อมูลไม่สำเร็จ');
                return false;
            }
        },

        // --- Calculate Cutoff Date Helper ---
        getCutoffDate(period) {
            const now = Date.now();
            switch (period) {
                case '1_month': return new Date(now - 30 * 24 * 60 * 60 * 1000);
                case '3_months': return new Date(now - 90 * 24 * 60 * 60 * 1000);
                case '6_months': return new Date(now - 180 * 24 * 60 * 60 * 1000);
                case '1_year': return new Date(now - 365 * 24 * 60 * 60 * 1000);
                case '2_years': return new Date(now - 730 * 24 * 60 * 60 * 1000);
                case 'all_user_records': return new Date(now + 100 * 365 * 24 * 60 * 60 * 1000);
                default: return null;
            }
        },

        // --- Preview Purge Counts before Action ---
        previewPurgeCount(period) {
            const cutoff = this.getCutoffDate(period);
            if (!cutoff) return { bookingsToPurge: 0, recordsToPurge: 0 };

            const state = this.getState();
            let bookingsToPurge = 0;
            let recordsToPurge = 0;

            if (period === 'all_user_records') {
                bookingsToPurge = (state.bookings || []).length;
                recordsToPurge = (state.records || []).length;
            } else {
                (state.bookings || []).forEach(b => {
                    const dateStr = b.end || b.start || b.date;
                    const bDate = dateStr ? new Date(dateStr) : null;
                    if (bDate && !isNaN(bDate.getTime()) && bDate < cutoff) bookingsToPurge++;
                });

                (state.records || []).forEach(r => {
                    const rDateStr = r.service_date || r.next_service_date;
                    const rDate = rDateStr ? new Date(rDateStr) : null;
                    if (rDate && !isNaN(rDate.getTime()) && rDate < cutoff) recordsToPurge++;
                });
            }

            return {
                bookingsToPurge,
                recordsToPurge,
                totalBookings: (state.bookings || []).length,
                totalRecords: (state.records || []).length,
                cutoffDate: cutoff
            };
        },

        // --- Admin Data Retention Purge: Cleans old user transactions to free Firebase Spark quota ---
        async purgeUserTransactions(period, adminUser) {
            if (!adminUser || adminUser.role !== 'admin') {
                throw new Error("สิทธิ์ไม่ถูกต้อง: เฉพาะผู้ดูแลระบบ (Admin) เท่านั้นที่สามารถล้างข้อมูลได้");
            }

            const cutoff = this.getCutoffDate(period);
            if (!cutoff) throw new Error("กรุณาเลือกช่วงเวลาการลบที่ถูกต้อง");

            const state = this.getState();
            const originalBookings = (state.bookings || []).length;
            const originalRecords = (state.records || []).length;

            let keptBookings = [];
            let purgedBookingsCount = 0;

            if (period === 'all_user_records') {
                keptBookings = [];
                purgedBookingsCount = originalBookings;
            } else {
                (state.bookings || []).forEach(b => {
                    const dateStr = b.end || b.start || b.date;
                    const bDate = dateStr ? new Date(dateStr) : null;
                    if (bDate && !isNaN(bDate.getTime()) && bDate < cutoff) {
                        purgedBookingsCount++;
                    } else {
                        keptBookings.push(b);
                    }
                });
            }

            let keptRecords = [];
            let purgedRecordIds = [];

            if (period === 'all_user_records') {
                purgedRecordIds = (state.records || []).map(r => r.id);
                keptRecords = [];
            } else {
                (state.records || []).forEach(r => {
                    const rDateStr = r.service_date || r.next_service_date;
                    const rDate = rDateStr ? new Date(rDateStr) : null;
                    if (rDate && !isNaN(rDate.getTime()) && rDate < cutoff) {
                        purgedRecordIds.push(r.id);
                    } else {
                        keptRecords.push(r);
                    }
                });
            }

            const purgedRecordsCount = purgedRecordIds.length;

            // Strict master data protection: ONLY mutate bookings & records!
            state.bookings = keptBookings;
            state.records = keptRecords;

            // Save state
            this.saveState(state);

            // Purge associated PO files in IndexedDB to reclaim disk/quota
            if (purgedRecordIds.length > 0) {
                await LabPoStorage.deleteKeys(purgedRecordIds);
            }

            // Sync to Firebase if active, and purge corresponding cloud attachments in lab_attachments
            if (window.LabFirebase && LabFirebase.isConfigured()) {
                await LabFirebase.syncToCloud(state);
                if (purgedRecordIds.length > 0) {
                    for (const rid of purgedRecordIds) {
                        try {
                            await LabFirebase.deleteAttachmentFromCloud(rid);
                        } catch (e) {
                            console.warn(`[LabStateBridge] deleteAttachmentFromCloud notice for record ${rid}:`, e);
                        }
                    }
                }
            }

            return {
                purgedBookings: purgedBookingsCount,
                purgedRecords: purgedRecordsCount,
                remainingBookings: keptBookings.length,
                remainingRecords: keptRecords.length,
                purgedPoCount: purgedRecordIds.length,
                purgedAuditLogs: (() => {
                    try {
                        const auditKey = 'carePlusAuditLog';
                        const logs = JSON.parse(localStorage.getItem(auditKey) || '[]');
                        if (period === 'all_user_records') {
                            localStorage.setItem(auditKey, '[]');
                            return logs.length;
                        }
                        const kept = logs.filter(l => {
                            const d = l.timestamp ? new Date(l.timestamp) : null;
                            return d && !isNaN(d.getTime()) && d >= cutoff;
                        });
                        localStorage.setItem(auditKey, JSON.stringify(kept));
                        return logs.length - kept.length;
                    } catch { return 0; }
                })()
            };
        }
    };

    // --- 3. Authentication & SSO Simulation (LabAuth) ---
    const SESSION_KEY = 'labUserSession';

    const LabAuth = {
        getCurrentUser() {
            let emailOrUsername = null;
            try {
                emailOrUsername = localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY);
            } catch (e) {}
            if (!emailOrUsername) return null;

            const state = LabStateBridge.getState();
            const lower = emailOrUsername.toLowerCase().trim();

            const found = state.users.find(u => 
                u.username.toLowerCase() === lower ||
                u.username.toLowerCase().split('@')[0] === lower
            );

            if (found && typeof document !== 'undefined' && document.documentElement) {
                document.documentElement.classList.add('has-active-session');
            }

            return found || null;
        },

        login(identifier, password) {
            if (!identifier || !password) return { success: false, message: 'Please enter Username and Password' };

            const trimmedId = identifier.trim().toLowerCase();
            const trimmedPass = password.trim();
            const state = LabStateBridge.getState();

            // Intelligent matching: exact username, prefix before @, or exact email
            const user = state.users.find(u => {
                const uName = u.username.toLowerCase();
                const prefix = uName.split('@')[0];
                return (uName === trimmedId || prefix === trimmedId) && u.password === trimmedPass;
            });

            if (user) {
                try {
                    localStorage.setItem(SESSION_KEY, user.username);
                    sessionStorage.setItem(SESSION_KEY, user.username);
                    localStorage.setItem('NoteLab_SessionToken', Math.random().toString(36).substring(2));
                    if (typeof document !== 'undefined' && document.documentElement) {
                        document.documentElement.classList.add('has-active-session');
                    }
                    if (window.LabFirebase) {
                        LabFirebase.updatePresence(user);
                    }
                } catch (e) {}
                return { success: true, user };
            }

            return { success: false, message: 'Invalid username or password' };
        },

        logout() {
            try {
                const cur = this.getCurrentUser();
                if (window.LabFirebase && cur) {
                    LabFirebase.clearPresence(cur);
                }
                localStorage.removeItem(SESSION_KEY);
                sessionStorage.removeItem(SESSION_KEY);
                localStorage.removeItem('NoteLab_SessionToken');
                if (typeof document !== 'undefined' && document.documentElement) {
                    document.documentElement.classList.remove('has-active-session');
                }
            } catch (e) {}
        },

        isAdmin() {
            const u = this.getCurrentUser();
            return !!(u && u.role === 'admin');
        },

        changePassword(oldPassword, newPassword) {
            const currentUser = this.getCurrentUser();
            if (!currentUser) {
                return { success: false, message: 'กรุณาเข้าสู่ระบบก่อนเปลี่ยนรหัสผ่าน' };
            }
            if (!oldPassword || !newPassword) {
                return { success: false, message: 'กรุณากรอกรหัสผ่านเดิมและรหัสผ่านใหม่' };
            }
            if (String(currentUser.password) !== String(oldPassword).trim()) {
                return { success: false, message: 'รหัสผ่านเดิมไม่ถูกต้อง' };
            }
            const cleanNew = String(newPassword).trim();
            if (cleanNew.length < 4) {
                return { success: false, message: 'รหัสผ่านใหม่ต้องมีความยาวอย่างน้อย 4 ตัวอักษร' };
            }
            if (String(oldPassword).trim() === cleanNew) {
                return { success: false, message: 'รหัสผ่านใหม่ต้องไม่ซ้ำกับรหัสผ่านเดิม' };
            }

            const state = LabStateBridge.getState();
            const uIdx = (state.users || []).findIndex(u =>
                String(u.id) === String(currentUser.id) ||
                u.username.toLowerCase() === currentUser.username.toLowerCase()
            );

            if (uIdx === -1) {
                return { success: false, message: 'ไม่พบข้อมูลผู้ใช้ในระบบ' };
            }

            state.users[uIdx].password = cleanNew;
            LabStateBridge.saveState(state);

            // Update current memory user reference if needed
            currentUser.password = cleanNew;

            return { success: true, message: 'เปลี่ยนรหัสผ่านสำเร็จเรียบร้อย' };
        },

        syncSession() {
            try {
                const u = this.getCurrentUser();
                if (u) {
                    localStorage.setItem(SESSION_KEY, u.username);
                    sessionStorage.setItem(SESSION_KEY, u.username);
                    if (typeof document !== 'undefined' && document.documentElement) {
                        document.documentElement.classList.add('has-active-session');
                    }
                }
            } catch (e) {}
        }
    };

    // Immediate check on script load
    try {
        const _s = localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY);
        if (_s && typeof document !== 'undefined' && document.documentElement) {
            document.documentElement.classList.add('has-active-session');
        }
    } catch (e) {}

    // --- 4. Web Audio Synthesizer (Disabled & Sound Removed) ---
    const LabAudio = {
        isMuted() { return true; },
        initCtx() { return null; },
        toggleMute() { return true; },
        updateUI() {},
        playTone() {},
        playSuccess() {},
        playClick() {},
        playError() {},
        playWarning() {}
    };

    // --- 5. Mobile Haptic Engine ---
    const LabHaptic = {
        vibrate(pattern) {
            try {
                if ('vibrate' in navigator) {
                    navigator.vibrate(pattern || 15);
                }
            } catch (e) {}
        },
        tap() { this.vibrate(12); },
        success() { this.vibrate([15, 40, 20]); },
        error() { this.vibrate([30, 40, 30]); }
    };

    // --- 6. Theme Controller (Dark Mode Removed - Light Mode Enforced) ---
    const LabTheme = {
        getTheme() {
            return 'light';
        },

        setTheme() {
            if (typeof document !== 'undefined') {
                document.documentElement.classList.remove('dark');
                document.body?.classList.remove('dark');
            }
        },

        toggle() {
            this.setTheme();
            return 'light';
        },

        init() {
            try {
                localStorage.removeItem('lab_theme');
            } catch (e) {}
            this.setTheme();
        }
    };

    // --- 7. SweetAlert 2.0 Theme Wrapper (LabAlert) ---
    const LabAlert = {
        getSwalDefaults() {
            return {
                background: '#FFFFFF',
                color: '#0F172A',
                confirmButtonColor: '#0F766E', // Mitr Phol Teal
                cancelButtonColor: '#94A3B8',
                customClass: {
                    popup: 'lab-swal-popup',
                    title: 'lab-swal-title',
                    confirmButton: 'lab-swal-confirm-btn',
                    cancelButton: 'lab-swal-cancel-btn'
                }
            };
        },

        toast(type, title, timer = 2200) {
            if (type === 'success') {
                LabHaptic.success();
            } else if (type === 'error') {
                LabHaptic.error();
            } else {
                LabHaptic.tap();
            }

            if (typeof Swal !== 'undefined') {
                const defaults = this.getSwalDefaults();
                return Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: type || 'info',
                    title: title || '',
                    showConfirmButton: false,
                    timer: timer,
                    timerProgressBar: true,
                    background: defaults.background,
                    color: defaults.color
                });
            }
        },

        confirm(options) {
            LabHaptic.tap();

            if (typeof Swal !== 'undefined') {
                const defaults = this.getSwalDefaults();
                let title = 'ยืนยันการดำเนินการ?';
                let text = '';
                let html = undefined;
                let icon = 'warning';
                let confirmText = 'ยืนยัน';
                let cancelText = 'ยกเลิก';
                let confirmColor = defaults.confirmButtonColor;

                if (typeof options === 'string') {
                    title = options;
                    if (arguments.length > 1) {
                        const arg1 = arguments[1];
                        if (typeof arg1 === 'string' && (arg1.includes('<') || arg1.includes('\n'))) {
                            html = arg1;
                        } else {
                            text = arg1 || '';
                        }
                    }
                    if (arguments.length > 2) confirmText = arguments[2];
                    if (arguments.length > 3) cancelText = arguments[3];
                } else if (options && typeof options === 'object') {
                    title = options.title || title;
                    text = options.text || '';
                    html = options.html;
                    icon = options.icon || icon;
                    confirmText = options.confirmText || confirmText;
                    cancelText = options.cancelText || cancelText;
                    confirmColor = options.confirmColor || confirmColor;
                }

                const swalOpts = {
                    title,
                    icon,
                    showCancelButton: true,
                    confirmButtonText: confirmText,
                    cancelButtonText: cancelText,
                    confirmButtonColor: confirmColor,
                    cancelButtonColor: defaults.cancelButtonColor,
                    background: defaults.background,
                    color: defaults.color
                };
                if (html) swalOpts.html = html;
                else swalOpts.text = text;

                return Swal.fire(swalOpts).then(res => res.isConfirmed);
            }
            return Promise.resolve(confirm((typeof options === 'string' ? options : options.title) + '\n' + (typeof options === 'string' ? (arguments[1] || '') : (options.text || ''))));
        },

        success(title, text) {
            LabHaptic.success();
            if (typeof Swal !== 'undefined') {
                const defaults = this.getSwalDefaults();
                return Swal.fire({
                    icon: 'success',
                    title: title || 'สำเร็จ',
                    text: text || '',
                    confirmButtonColor: defaults.confirmButtonColor,
                    background: defaults.background,
                    color: defaults.color
                });
            }
        },

        error(title, text) {
            LabHaptic.error();
            if (typeof Swal !== 'undefined') {
                const defaults = this.getSwalDefaults();
                return Swal.fire({
                    icon: 'error',
                    title: title || 'เกิดข้อผิดพลาด',
                    text: text || '',
                    confirmButtonColor: '#F43F5E',
                    background: defaults.background,
                    color: defaults.color
                });
            }
        }
    };

    // --- 8. Smart Defaults & Helper Utilities (LabSmart) ---
    const LabSmart = {
        // Returns start and end rounded to next hour
        getNextHourlySlot(hoursSpan = 1) {
            const now = new Date();
            now.setMinutes(0, 0, 0);
            now.setHours(now.getHours() + 1);

            const end = new Date(now.getTime() + hoursSpan * 3600000);

            const toLocalISO = (d) => {
                const pad = n => String(n).padStart(2, '0');
                return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
            };

            return {
                start: toLocalISO(now),
                end: toLocalISO(end)
            };
        },

        getTodayDateString() {
            const d = new Date();
            const pad = n => String(n).padStart(2, '0');
            return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
        },

        formatDateThai(dateStr) {
            if (!dateStr) return '-';
            try {
                const d = new Date(dateStr);
                if (isNaN(d.getTime())) return dateStr;
                return d.toLocaleDateString('th-TH', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                });
            } catch (e) {
                return dateStr;
            }
        },

        formatMoney(val) {
            const num = parseFloat(val) || 0;
            return '฿' + num.toLocaleString('th-TH', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
        },

        setInlineError(inputEl, msg) {
            if (!inputEl) return;
            inputEl.classList.add('lab-input-error');

            let errEl = inputEl.parentNode.querySelector('.lab-inline-error-msg');
            if (!errEl) {
                errEl = document.createElement('div');
                errEl.className = 'lab-inline-error-msg';
                inputEl.parentNode.appendChild(errEl);
            }
            errEl.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> <span>${msg}</span>`;
            LabHaptic.error();

            const onInput = () => {
                this.clearInlineError(inputEl);
                inputEl.removeEventListener('input', onInput);
            };
            inputEl.addEventListener('input', onInput);
        },

        clearInlineError(inputEl) {
            if (!inputEl) return;
            inputEl.classList.remove('lab-input-error');
            const errEl = inputEl.parentNode.querySelector('.lab-inline-error-msg');
            if (errEl) errEl.remove();
        },

        togglePassword(inputId, btnEl) {
            const input = document.getElementById(inputId);
            if (!input) return;
            LabHaptic.tap();
            const isPass = input.type === 'password';
            input.type = isPass ? 'text' : 'password';
            const icon = btnEl ? btnEl.querySelector('i') : null;
            if (icon) {
                icon.className = isPass ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
            }
        },

        fillDemo(u, p, uId, pId) {
            LabHaptic.tap();
            const uInput = document.getElementById(uId);
            const pInput = document.getElementById(pId);
            if (uInput) {
                uInput.value = u;
                this.clearInlineError(uInput);
            }
            if (pInput) {
                pInput.value = p;
                this.clearInlineError(pInput);
            }
            LabAlert.toast('info', `ใช้บัญชีทดสอบ: ${u}`, 1500);
        }
    };

    // Global Haptic feedback for touch and clicks
    document.addEventListener('click', (e) => {
        const target = e.target.closest('button, .btn, .ios-btn, .lab-btn, .nav-pill, .app-switch-btn, .demo-chip, .modal-close-btn');
        if (target) {
            LabHaptic.tap();
        }
    }, { passive: true });

    // --- 9. Firebase Spark (Free Tier) Cloud Adapter (LabFirebase) ---
    const LabFirebase = {
        CONFIG_KEY: 'lab_firebase_config',
        app: null,
        db: null,
        isConnecting: false,
        _initPromise: null,

        // Built-in Enterprise Configuration - Connects automatically for all users without entering keys
        DEFAULT_CONFIG: {
            apiKey: "AIzaSyCo00njz18BSvRl6LGhNhRbUQ7AZOmqbRo",
            authDomain: "mpir-lab-suite.firebaseapp.com",
            projectId: "mpir-lab-suite",
            storageBucket: "mpir-lab-suite.firebasestorage.app",
            messagingSenderId: "619561217857",
            appId: "1:619561217857:web:1543a9598a1046642efbc0"
        },

        // Deep-clean payload to guarantee no 'undefined' values reach Firestore SDK set()
        sanitizePayload(val) {
            if (val === undefined) return null;
            if (val === null || typeof val !== 'object') return val;
            if (val instanceof Date) return val.toISOString();
            if (Array.isArray(val)) {
                return val.map(item => this.sanitizePayload(item));
            }
            const clean = {};
            for (const key of Object.keys(val)) {
                const item = val[key];
                if (item !== undefined) {
                    clean[key] = this.sanitizePayload(item);
                }
            }
            return clean;
        },

        getConfig() {
            try {
                const raw = localStorage.getItem(this.CONFIG_KEY);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    // Explicit user opt-out into Local-first mode
                    if (parsed && parsed.disabled) {
                        return { disabled: true };
                    }
                    if (parsed && parsed.apiKey && parsed.projectId && !parsed.projectId.includes('xxxx')) {
                        return parsed;
                    }
                }
            } catch (e) {}

            // Fallback to central default config so other users never have to enter credentials
            if (this.DEFAULT_CONFIG && this.DEFAULT_CONFIG.apiKey && this.DEFAULT_CONFIG.projectId) {
                return this.DEFAULT_CONFIG;
            }
            return null;
        },

        saveConfig(cfg) {
            if (!cfg || typeof cfg !== 'object' || cfg.disabled) {
                localStorage.setItem(this.CONFIG_KEY, JSON.stringify({ disabled: true }));
                this.db = null;
                this.app = null;
                this.isConnecting = false;
                this._initPromise = null;
                window.dispatchEvent(new CustomEvent('labCloudStatusChange', { detail: this.getStatus() }));
                LabAlert.toast('info', 'ตัดการเชื่อมต่อ Cloud เรียบร้อยแล้ว (กำลังทำงานแบบ Local-first)');
                return;
            }
            localStorage.setItem(this.CONFIG_KEY, JSON.stringify(cfg));
            this.init().then(ok => {
                window.dispatchEvent(new CustomEvent('labCloudStatusChange', { detail: this.getStatus() }));
                if (ok) {
                    LabAlert.toast('success', 'เชื่อมต่อ Firebase Cloud สำเร็จ');
                    // Initial push
                    this.syncToCloud(LabStateBridge.getState());
                } else {
                    LabAlert.toast('warning', 'บันทึกการตั้งค่าแล้ว แต่ยังไม่สามารถเชื่อมต่อ Cloud ได้ (กำลังทำงานแบบ Local)');
                }
            });
        },

        clearConfig() {
            this.saveConfig({ disabled: true });
        },

        isConfigured() {
            const cfg = this.getConfig();
            return !!(cfg && !cfg.disabled && cfg.apiKey && cfg.projectId);
        },

        getStatus() {
            const configured = this.isConfigured();
            return {
                configured,
                plan: 'Spark (Free Tier - 1GB Storage, 50k Reads, 20k Writes, 20k Deletes/Day)',
                statusText: configured
                    ? (navigator.onLine ? 'Cloud Connected (Real-time Sync Active)' : 'Cloud Configured (Offline Fallback)')
                    : 'Local Storage Bridge (Ready for Firebase Config)',
                isOnline: configured && navigator.onLine,
                badgeClass: configured
                    ? (navigator.onLine ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200')
                    : 'bg-gray-100 text-gray-600 border-gray-200'
            };
        },

        loadScript(src) {
            return new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
                const s = document.createElement('script');
                s.src = src;
                s.onload = () => resolve();
                s.onerror = () => reject(new Error('Failed to load ' + src));
                document.head.appendChild(s);
            });
        },

        async init() {
            const cfg = this.getConfig();
            if (!cfg || cfg.disabled || !cfg.apiKey || !cfg.projectId) return false;
            if (this.db) return true;
            if (this._initPromise) return this._initPromise;

            this.isConnecting = true;
            this._initPromise = (async () => {
                try {
                    if (typeof firebase === 'undefined') {
                        await this.loadScript('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
                        await this.loadScript('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js');
                    }

                    if (!firebase.apps.length) {
                        this.app = firebase.initializeApp(cfg);
                    } else {
                        this.app = firebase.app();
                    }

                    this.db = firebase.firestore();
                    console.log("[LabFirebase] Connected to Spark Plan (Cloud Firestore)");
                    this.listenToRemote();
                    this.isConnecting = false;
                    window.dispatchEvent(new CustomEvent('labCloudStatusChange', { detail: this.getStatus() }));
                    return true;
                } catch (err) {
                    console.warn("[LabFirebase] Cloud connection fallback to LocalStorage:", err);
                    this.isConnecting = false;
                    window.dispatchEvent(new CustomEvent('labCloudStatusChange', { detail: this.getStatus() }));
                    return false;
                } finally {
                    this._initPromise = null;
                }
            })();

            return this._initPromise;
        },

        async syncToCloud(state) {
            if (!this.db) {
                const ok = await this.init();
                if (!ok || !this.db) return false;
            }
            try {
                const sanitized = this.sanitizePayload(state || {});
                delete sanitized.poFilesDb; // Do not store heavy blobs in main state document
                const payload = {
                    ...sanitized,
                    lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
                };
                await this.db.collection('lab_suite').doc('current_state').set(payload, { merge: true });
                return true;
            } catch (err) {
                console.warn("[LabFirebase] syncToCloud notice:", err);
                return false;
            }
        },

        // --- Cloud Attachment Storage: Compressed user files stored in dedicated Firestore collection ---
        async syncAttachmentToCloud(recordId, files) {
            if (!recordId || !files || !Array.isArray(files) || files.length === 0) return false;
            if (!this.db) {
                const ok = await this.init();
                if (!ok || !this.db) return false;
            }
            try {
                const processedFiles = [];
                for (const f of files) {
                    if (f && f.data && !f.compressed) {
                        const comp = await LabCompressor.compressDataUrl(f.data, f.name);
                        processedFiles.push({
                            name: f.name,
                            compressed: comp.compressed,
                            format: comp.format,
                            mimeType: comp.mimeType,
                            origSize: comp.origSize,
                            compSize: comp.compSize,
                            ratio: comp.ratio,
                            data: comp.data
                        });
                    } else {
                        processedFiles.push(f);
                    }
                }

                const cleanFiles = this.sanitizePayload(processedFiles);
                await this.db.collection('lab_attachments').doc(String(recordId)).set({
                    recordId: String(recordId),
                    files: cleanFiles,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                }, { merge: true });
                console.log(`[LabFirebase] Synced ${cleanFiles.length} compressed attachment(s) to Cloud for record ${recordId}`);
                return true;
            } catch (err) {
                console.warn(`[LabFirebase] syncAttachmentToCloud error for record ${recordId}:`, err);
                return false;
            }
        },

        async fetchAttachmentFromCloud(recordId) {
            if (!recordId) return null;
            if (!this.db) {
                const ok = await this.init();
                if (!ok || !this.db) return null;
            }
            try {
                const snap = await this.db.collection('lab_attachments').doc(String(recordId)).get();
                if (snap.exists) {
                    const data = snap.data();
                    return data && data.files ? data.files : null;
                }
                return null;
            } catch (err) {
                console.warn(`[LabFirebase] fetchAttachmentFromCloud error for record ${recordId}:`, err);
                return null;
            }
        },

        async fetchAllAttachmentsFromCloud() {
            if (!this.db) {
                const ok = await this.init();
                if (!ok || !this.db) return {};
            }
            try {
                const snapshot = await this.db.collection('lab_attachments').get();
                const res = {};
                snapshot.forEach(doc => {
                    const d = doc.data();
                    if (d && d.files) {
                        res[doc.id] = d.files;
                    }
                });
                return res;
            } catch (err) {
                console.warn("[LabFirebase] fetchAllAttachmentsFromCloud notice:", err);
                return {};
            }
        },

        async deleteAttachmentFromCloud(recordId) {
            if (!recordId) return false;
            if (!this.db) {
                const ok = await this.init();
                if (!ok || !this.db) return false;
            }
            try {
                await this.db.collection('lab_attachments').doc(String(recordId)).delete();
                console.log(`[LabFirebase] Deleted attachment for record ${recordId} from Cloud`);
                return true;
            } catch (err) {
                console.warn(`[LabFirebase] deleteAttachmentFromCloud error for record ${recordId}:`, err);
                return false;
            }
        },

        async fetchStateFromCloud() {
            if (!this.db) {
                const ok = await this.init();
                if (!ok || !this.db) return null;
            }
            try {
                const snap = await this.db.collection('lab_suite').doc('current_state').get();
                return snap.exists ? snap.data() : null;
            } catch (err) {
                return null;
            }
        },

        _presenceInterval: null,
        async updatePresence(user) {
            if (!user || !user.username) return;
            if (!this.db) {
                const ok = await this.init();
                if (!ok || !this.db) return;
            }
            try {
                const safeId = encodeURIComponent(user.username.toLowerCase()).replace(/[\.\$\[\]\#\/]/g, '_');
                await this.db.collection('lab_presence').doc(safeId).set({
                    username: user.username,
                    name: user.name || user.username.split('@')[0],
                    role: user.role || 'user',
                    lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
                    online: true
                }, { merge: true });

                if (!this._presenceInterval) {
                    this._presenceInterval = setInterval(() => {
                        const cur = LabAuth.getCurrentUser();
                        if (cur) {
                            this.updatePresence(cur);
                        } else {
                            this.clearPresence();
                        }
                    }, 20000);
                }
            } catch (e) {
                console.warn("[LabFirebase] updatePresence notice:", e);
            }
        },

        async clearPresence(user) {
            if (this._presenceInterval) {
                clearInterval(this._presenceInterval);
                this._presenceInterval = null;
            }
            const cur = user || LabAuth.getCurrentUser();
            if (!cur || !cur.username || !this.db) return;
            try {
                const safeId = encodeURIComponent(cur.username.toLowerCase()).replace(/[\.\$\[\]\#\/]/g, '_');
                await this.db.collection('lab_presence').doc(safeId).delete();
                window.dispatchEvent(new CustomEvent('labPresenceSync', { detail: [] }));
            } catch (e) {
                try {
                    const safeId = encodeURIComponent(cur.username.toLowerCase()).replace(/[\.\$\[\]\#\/]/g, '_');
                    await this.db.collection('lab_presence').doc(safeId).set({
                        online: false,
                        lastSeen: firebase.firestore.FieldValue.serverTimestamp()
                    }, { merge: true });
                } catch (err) {}
            }
        },

        listenToPresence(callback) {
            if (!this.db) return;
            try {
                this.db.collection('lab_presence').onSnapshot((snap) => {
                    const activeUsers = [];
                    const now = Date.now();
                    snap.forEach(doc => {
                        const d = doc.data();
                        if (d && d.online !== false) {
                            let lastTime = now;
                            if (d.lastSeen && typeof d.lastSeen.toMillis === 'function') {
                                lastTime = d.lastSeen.toMillis();
                            } else if (d.lastSeen && d.lastSeen.seconds) {
                                lastTime = d.lastSeen.seconds * 1000;
                            }
                            if (now - lastTime < 60000) { // Active within last 60 seconds
                                activeUsers.push(d);
                            }
                        }
                    });
                    if (typeof callback === 'function') {
                        callback(activeUsers);
                    }
                    window.dispatchEvent(new CustomEvent('labPresenceSync', { detail: activeUsers }));
                }, (err) => {
                    console.warn("[LabFirebase] Presence listener notice:", err);
                });
            } catch (e) {}
        },

        getSignature(data) {
            if (!data) return '';
            const b = (data.bookings || []).map(x => `${x.id}:${x.status || ''}:${x.start || ''}:${x.end || ''}:${x.eqId || x.equipmentId || ''}:${x.project || ''}:${x.desc || ''}:${x.user || ''}:${x.deleted ? 1 : 0}`).join('|');
            const r = (data.records || []).map(x => `${x.id}:${x.type || ''}:${x.service_date || ''}:${x.next_service_date || ''}:${x.calendar_status || ''}:${x.maintenance_cost || ''}:${(x.technicians || []).join(',')}:${x.reporter || ''}`).join('|');
            const u = (data.users || []).map(x => `${x.id}:${x.username}:${x.name}:${x.role}:${x.password}`).join('|');
            const e = (data.equipments || data.equipment || []).map(x => `${x.id}:${x.name}:${x.building_id || ''}:${x.model || ''}:${x.serial || ''}`).join('|');
            const loc = (data.buildings || []).map(x => `${x.id}:${x.name || ''}`).join('|');
            const tech = (data.technicians || []).join('|');
            const rep = (data.reporters || []).join('|');
            const a = (data.auditLogs || []).slice(0, 20).map(x => `${x.id}:${x.action || ''}:${x.timestamp || ''}`).join('|');
            return `${b}##${r}##${u}##${e}##${loc}##${tech}##${rep}##${a}`;
        },

        listenToRemote() {
            if (!this.db) return;
            try {
                this.db.collection('lab_suite').doc('current_state').onSnapshot((doc) => {
                    if (doc.exists) {
                        const remoteData = doc.data();
                        if (remoteData) {
                            delete remoteData.lastUpdated;
                            const current = LabStateBridge.getState();
                            
                            const curSig = this.getSignature(current);
                            const remSig = this.getSignature(remoteData);

                            if (curSig !== remSig) {
                                // Smart merge bookings without dropping concurrent or offline entries
                                const curBookings = current.bookings || [];
                                const remBookings = Array.isArray(remoteData.bookings) ? remoteData.bookings : [];
                                const mergedBookingsMap = new Map();
                                curBookings.forEach(b => { if (b && b.id) mergedBookingsMap.set(String(b.id), b); });
                                remBookings.forEach(b => {
                                    if (b && b.id) {
                                        const existing = mergedBookingsMap.get(String(b.id)) || {};
                                        mergedBookingsMap.set(String(b.id), { ...existing, ...b });
                                    }
                                });
                                const finalBookings = Array.from(mergedBookingsMap.values());

                                // Smart merge records
                                const curRecords = current.records || [];
                                const remRecords = Array.isArray(remoteData.records) ? remoteData.records : [];
                                const mergedRecordsMap = new Map();
                                curRecords.forEach(r => { if (r && r.id) mergedRecordsMap.set(String(r.id), r); });
                                remRecords.forEach(r => {
                                    if (r && r.id) {
                                        const existing = mergedRecordsMap.get(String(r.id)) || {};
                                        mergedRecordsMap.set(String(r.id), { ...existing, ...r });
                                    }
                                });
                                const finalRecords = Array.from(mergedRecordsMap.values());

                                // Smart merge equipments using Map so newly added local equipments are never dropped
                                const rawRemEquip = Array.isArray(remoteData.equipments) ? remoteData.equipments : (Array.isArray(remoteData.equipment) ? remoteData.equipment : []);
                                const curEquip = current.equipments || current.equipment || [];
                                const mergedEquipMap = new Map();
                                curEquip.forEach(ce => {
                                    if (ce && ce.id) mergedEquipMap.set(String(ce.id), ce);
                                });
                                rawRemEquip.forEach(re => {
                                    if (re && re.id) {
                                        const key = String(re.id);
                                        const existing = mergedEquipMap.get(key) || {};
                                        mergedEquipMap.set(key, {
                                            ...existing,
                                            ...re,
                                            model: (re.model && re.model !== '-') ? re.model : (existing?.model || re.model || '-')
                                        });
                                    }
                                });
                                const mergedEquip = Array.from(mergedEquipMap.values());

                                // Smart merge auditLogs
                                const curAudit = Array.isArray(current.auditLogs) ? current.auditLogs : [];
                                const remAudit = Array.isArray(remoteData.auditLogs) ? remoteData.auditLogs : [];
                                const mergedAuditMap = new Map();
                                curAudit.forEach(a => { if (a && a.id) mergedAuditMap.set(String(a.id), a); });
                                remAudit.forEach(a => { if (a && a.id) mergedAuditMap.set(String(a.id), a); });
                                const finalAudit = Array.from(mergedAuditMap.values()).sort((x, y) => new Date(y.timestamp) - new Date(x.timestamp)).slice(0, 300);

                                const merged = {
                                    ...current,
                                    ...remoteData,
                                    bookings: finalBookings,
                                    records: finalRecords,
                                    users: Array.isArray(remoteData.users) && remoteData.users.length > 0 ? remoteData.users : (current.users || []),
                                    equipments: mergedEquip,
                                    equipment: mergedEquip,
                                    buildings: Array.isArray(remoteData.buildings) && remoteData.buildings.length > 0 ? remoteData.buildings : (current.buildings || []),
                                    technicians: Array.isArray(remoteData.technicians) && remoteData.technicians.length > 0 ? remoteData.technicians : (current.technicians || []),
                                    reporters: Array.isArray(remoteData.reporters) && remoteData.reporters.length > 0 ? remoteData.reporters : (current.reporters || []),
                                    auditLogs: finalAudit
                                };
                                LabStateBridge.saveStateFromRemote(merged);
                                window.dispatchEvent(new CustomEvent('labRemoteSync', { detail: merged }));
                            }
                        }
                    }
                }, (err) => {
                    console.warn("[LabFirebase] Snapshot listener notice:", err);
                });

                // Also initialize presence listener
                this.listenToPresence();

                // If currently logged in, announce presence
                const active = LabAuth.getCurrentUser();
                if (active) {
                    this.updatePresence(active);
                }
            } catch (e) {}
        }
    };

    // --- 10. User Avatar Engine (LabAvatar) ---
    const LabAvatar = {
        _colors: [
            ['#0F766E', '#14B8A6'], // Teal
            ['#0284C7', '#38BDF8'], // Sky
            ['#4F46E5', '#818CF8'], // Indigo
            ['#7C3AED', '#A78BFA'], // Purple
            ['#C026D3', '#F472B6'], // Fuchsia
            ['#E11D48', '#FB7185'], // Rose
            ['#D97706', '#FBBF24'], // Amber
            ['#059669', '#34D399']  // Emerald
        ],

        getColorPair(nameOrId) {
            const str = String(nameOrId || 'user');
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            const idx = Math.abs(hash) % this._colors.length;
            return this._colors[idx];
        },

        getInitials(name) {
            if (!name) return 'US';
            let clean = String(name).split('@')[0];
            clean = clean.replace(/^(นาย|นางสาว|นาง|ดร\.|อาจารย์|dr\.|mr\.|mrs\.|ms\.)\s*/i, '').trim();
            const parts = clean.split(/\s+/).filter(Boolean);
            if (parts.length >= 2) {
                const first = parts[0].charAt(0);
                const last = parts[parts.length - 1].charAt(0);
                return (first + last).toUpperCase();
            }
            const caps = clean.match(/[A-Z]/g);
            if (caps && caps.length >= 2) {
                return (caps[0] + caps[caps.length - 1]).toUpperCase();
            }
            return clean.substring(0, 2).toUpperCase();
        },

        renderAvatar(user, size = 36, showOnlineDot = true) {
            if (!user) return '';
            if (typeof size === 'string') {
                const map = { sm: 28, md: 36, lg: 48, xl: 64 };
                size = map[size.toLowerCase()] || parseInt(size, 10) || 36;
            }
            const [c1, c2] = this.getColorPair(user.username || user.name);
            const initials = this.getInitials(user.name || user.username);
            const dotSize = Math.max(8, Math.round(size * 0.28));
            const fontSize = Math.round(size * 0.38);

            return `
                <div class="lab-avatar-wrap inline-flex items-center justify-center relative" style="width: ${size}px; height: ${size}px; flex-shrink: 0; cursor: pointer;" title="${user.name || user.username} (${user.role || 'user'})">
                    <div class="lab-avatar flex items-center justify-center" style="width: ${size}px; height: ${size}px; border-radius: 50%; background: linear-gradient(135deg, ${c1}, ${c2}); color: #ffffff; font-weight: 800; font-size: ${fontSize}px; text-transform: uppercase; box-shadow: 0 2px 8px rgba(0,0,0,0.15); border: 2px solid rgba(255,255,255,0.85); user-select: none;">
                        ${initials}
                    </div>
                    ${showOnlineDot ? `<span style="position: absolute; bottom: 0; right: 0; width: ${dotSize}px; height: ${dotSize}px; border-radius: 50%; background: #10B981; border: 2px solid #ffffff; box-shadow: 0 0 4px #10B981;"></span>` : ''}
                </div>
            `;
        },

        renderActivePresenceStack(users = [], maxDisplay = 4) {
            if (!Array.isArray(users) || users.length === 0) return '';
            const displayUsers = users.slice(0, maxDisplay);
            const remaining = users.length - maxDisplay;

            let html = `<div class="lab-presence-stack flex items-center" style="display: inline-flex; align-items: center; margin-right: 0.5rem;" title="ผู้ใช้ออนไลน์ในระบบ ${users.length} คน: ${users.map(u => u.name || u.username).join(', ')}">`;
            displayUsers.forEach((u, i) => {
                const [c1, c2] = this.getColorPair(u.username || u.name);
                const init = this.getInitials(u.name || u.username);
                html += `
                    <div style="width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, ${c1}, ${c2}); color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; border: 2px solid #ffffff; margin-left: ${i > 0 ? '-8px' : '0'}; box-shadow: 0 2px 4px rgba(0,0,0,0.1); position: relative; z-index: ${10 - i};" title="${u.name || u.username}">
                        ${init}
                    </div>
                `;
            });
            if (remaining > 0) {
                html += `
                    <div style="width: 28px; height: 28px; border-radius: 50%; background: #64748B; color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; border: 2px solid #ffffff; margin-left: -8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); z-index: 1;" title="และอีก ${remaining} คน">
                        +${remaining}
                    </div>
                `;
            }
            html += `<span class="hidden lg:inline-flex items-center ml-2 text-[11px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-1 animate-pulse"></span>${users.length} Online</span>`;
            html += `</div>`;
            return html;
        }
    };

    // Auto-init on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        LabTheme.init();
        if (LabFirebase.isConfigured()) {
            LabFirebase.init();
        }
    });

    // Cleanup active presence when closing tab/browser and flush pending sync
    window.addEventListener('beforeunload', () => {
        try {
            if (window.LabStateBridge) LabStateBridge.flushSync();
            const cur = LabAuth.getCurrentUser();
            if (cur && window.LabFirebase) {
                LabFirebase.clearPresence(cur);
            }
        } catch (e) {}
    });
    window.addEventListener('pagehide', () => {
        try {
            if (window.LabStateBridge) LabStateBridge.flushSync();
            const cur = LabAuth.getCurrentUser();
            if (cur && window.LabFirebase) {
                LabFirebase.clearPresence(cur);
            }
        } catch (e) {}
    });

    // Expose to window
    window.LabCompressor = LabCompressor;
    window.LabPoStorage = LabPoStorage;
    window.LabStateBridge = LabStateBridge;
    window.LabAuth = LabAuth;
    window.LabAudio = LabAudio;
    window.LabHaptic = LabHaptic;
    window.LabTheme = LabTheme;
    window.LabAlert = LabAlert;
    window.LabSmart = LabSmart;
    window.LabFirebase = LabFirebase;
    window.LabAvatar = LabAvatar;

})(window);
