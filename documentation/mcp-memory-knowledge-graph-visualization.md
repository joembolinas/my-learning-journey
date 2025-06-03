# MCP Memory Knowledge Graph Visualization

## Overview

This document provides comprehensive Mermaid diagrams visualizing the MCP Memory Knowledge Graph structure for the TERM-3 SY-2024-25 Academic Workspace.

## Core Academic Workspace Architecture

```mermaid
graph TD
    %% Central Project Node
    AWP[Academic_Workspace_Project]
    
    %% Student User
    SU[Student_User]
    
    %% Courses
    IT103[MO-IT103<br/>Computer Programming 2]
    IT143[MO-IT143<br/>Ethical Hacking]
    IT147[MO-IT147<br/>Information Assurance Security 1]
    IT148[MO-IT148<br/>Applications Development Emerging Technologies]
    IT151[MO-IT151<br/>Platform Technologies]
    
    %% Core Systems
    GHA[GitHub_Actions_Automation]
    PS[Privacy_Solution]
    FCS[Feedback_Collection_System]
    VS[VS_Code_Workspace_Configuration]
    
    %% User Relationships
    SU -->|manages| AWP
    SU -->|enrolled_in| IT103
    SU -->|enrolled_in| IT143
    SU -->|enrolled_in| IT147
    SU -->|enrolled_in| IT148
    SU -->|enrolled_in| IT151
    
    %% Project Structure
    AWP -->|includes| IT103
    AWP -->|includes| IT143
    AWP -->|includes| IT147
    AWP -->|includes| IT148
    AWP -->|includes| IT151
    AWP -->|implements| GHA
    AWP -->|implements| PS
    AWP -->|implements| FCS
    AWP -->|implements| VS
    
    %% Support Systems
    GHA -->|supports| IT103
    GHA -->|supports| IT143
    GHA -->|supports| IT147
    GHA -->|supports| IT148
    GHA -->|supports| IT151
    
    PS -->|protects| IT103
    PS -->|protects| IT143
    PS -->|protects| IT147
    PS -->|protects| IT148
    PS -->|protects| IT151
    
    FCS -->|collects_from| IT103
    FCS -->|collects_from| IT143
    FCS -->|collects_from| IT147
    FCS -->|collects_from| IT148
    FCS -->|collects_from| IT151
    
    %% Course Interconnections
    IT103 -.->|foundation_for| IT148
    IT143 -.->|security_for| IT147
    IT147 -.->|security_for| IT151
    IT148 -.->|emerging_tech_in| IT151
    
    %% Styling
    classDef courseNode fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef projectNode fill:#f3e5f5,stroke:#4a148c,stroke-width:3px
    classDef systemNode fill:#e8f5e8,stroke:#1b5e20,stroke-width:2px
    classDef userNode fill:#fff3e0,stroke:#e65100,stroke-width:2px
    
    class IT103,IT143,IT147,IT148,IT151 courseNode
    class AWP projectNode
    class GHA,PS,FCS,VS systemNode
    class SU userNode
```

## Course Ecosystem Detailed View

```mermaid
graph LR
    subgraph "MO-IT103 Computer Programming 2"
        CP2_A[Assignments]
        CP2_P[Projects]
        CP2_N[Notes]
        CP2_PI[Portfolio Items]
    end
    
    subgraph "MO-IT143 Ethical Hacking"
        EH_A[Assignments]
        EH_P[Projects]
        EH_N[Notes]
        EH_PI[Portfolio Items]
    end
    
    subgraph "MO-IT147 Info Assurance Security 1"
        IAS_A[Assignments]
        IAS_P[Projects]
        IAS_N[Notes]
        IAS_PI[Portfolio Items]
    end
    
    subgraph "MO-IT148 App Dev Emerging Tech"
        ADET_A[Assignments]
        ADET_P[Projects]
        ADET_N[Notes]
        ADET_PI[Portfolio Items]
    end
    
    subgraph "MO-IT151 Platform Technologies"
        PT_A[Assignments]
        PT_P[Projects]
        PT_N[Notes]
        PT_PI[Portfolio Items]
    end
    
    subgraph "Portfolio System"
        ACHIEVEMENTS[Achievements]
        SKILLS[Skills]
        TESTIMONIALS[Testimonials]
        PROJECTS[Projects]
    end
    
    %% Portfolio Integration
    CP2_PI --> ACHIEVEMENTS
    EH_PI --> ACHIEVEMENTS
    IAS_PI --> ACHIEVEMENTS
    ADET_PI --> ACHIEVEMENTS
    PT_PI --> ACHIEVEMENTS
    
    CP2_P --> PROJECTS
    EH_P --> PROJECTS
    IAS_P --> PROJECTS
    ADET_P --> PROJECTS
    PT_P --> PROJECTS
    
    %% Cross-Course Dependencies
    CP2_P -.-> ADET_P
    EH_P -.-> IAS_P
    IAS_P -.-> PT_P
    ADET_P -.-> PT_P
```

## Automation Workflow Network

```mermaid
graph TB
    subgraph "GitHub Actions Workflows"
        WTG[Weekly Task Generator]
        PAU[Portfolio Auto Update]
        PBM[Project Board Management]
        FC[Feedback Collection]
        MT[Milestone Tracking]
    end
    
    subgraph "VS Code Tasks"
        CNA[Create New Assignment]
        CNN[Create New Notes]
        CNP[Create New Project]
        CPI[Create Portfolio Item]
        RPT[Run Progress Tracker]
        UP[Update Portfolio]
        BMM[Backup MCP Memory]
        GWR[Generate Weekly Report]
    end
    
    subgraph "Python Scripts"
        CPT[Course Progress Tracker]
        PU[Portfolio Updater]
    end
    
    subgraph "Templates System"
        AT[Assignment Template]
        NT[Notes Template]
        PIT[Portfolio Item Template]
        PT[Project Template]
        TCT[Testimonial Collection Template]
    end
    
    %% Workflow Connections
    WTG --> CNA
    WTG --> CNN
    WTG --> CNP
    
    PAU --> UP
    PAU --> PU
    
    FC --> CPI
    FC --> TCT
    
    MT --> RPT
    MT --> CPT
    
    %% Task to Template Connections
    CNA --> AT
    CNN --> NT
    CNP --> PT
    CPI --> PIT
    
    %% Memory Backup
    BMM --> BMM_FILES[MCP Memory Backup Files]
    
    %% Report Generation
    GWR --> REPORTS[Weekly Reports]
    RPT --> CPT
    UP --> PU
```

## MCP Memory Entity Types Structure

```mermaid
graph TD
    subgraph "Entity Types"
        PROJECT[Project Entities]
        COURSE[Course Entities]
        SYSTEM[System Entities]
        USER[User Entities]
        CONTENT[Content Entities]
    end
    
    subgraph "Project Entities"
        AWP[Academic_Workspace_Project]
    end
    
    subgraph "Course Entities"
        IT103[MO-IT103]
        IT143[MO-IT143]
        IT147[MO-IT147]
        IT148[MO-IT148]
        IT151[MO-IT151]
    end
    
    subgraph "System Entities"
        GHA[GitHub_Actions_Automation]
        PS[Privacy_Solution]
        FCS[Feedback_Collection_System]
        VS[VS_Code_Workspace_Configuration]
    end
    
    subgraph "User Entities"
        SU[Student_User]
    end
    
    subgraph "Content Entities"
        TEMPLATES[Template_System]
        PORTFOLIO[Portfolio_System]
        AUTOMATION[Automation_Scripts]
    end
    
    %% Type Classifications
    PROJECT --> AWP
    COURSE --> IT103
    COURSE --> IT143
    COURSE --> IT147
    COURSE --> IT148
    COURSE --> IT151
    SYSTEM --> GHA
    SYSTEM --> PS
    SYSTEM --> FCS
    SYSTEM --> VS
    USER --> SU
    CONTENT --> TEMPLATES
    CONTENT --> PORTFOLIO
    CONTENT --> AUTOMATION
```

## Relationship Types Hierarchy

```mermaid
graph LR
    subgraph "Core Relationships"
        INCLUDES[includes]
        IMPLEMENTS[implements]
        MANAGES[manages]
        SUPPORTS[supports]
    end
    
    subgraph "Academic Relationships"
        ENROLLED[enrolled_in]
        FOUNDATION[foundation_for]
        SECURITY[security_for]
        EMERGING[emerging_tech_in]
    end
    
    subgraph "System Relationships"
        PROTECTS[protects]
        COLLECTS[collects_from]
        AUTOMATES[automates]
        GENERATES[generates]
    end
    
    subgraph "Content Relationships"
        CREATES[creates]
        USES[uses]
        REFERENCES[references]
        UPDATES[updates]
    end
    
    %% Usage Examples
    INCLUDES -.-> |AWP → Courses| COURSE_INCLUSION[Course Inclusion]
    IMPLEMENTS -.-> |AWP → Systems| SYSTEM_IMPL[System Implementation]
    ENROLLED -.-> |User → Courses| ENROLLMENT[Student Enrollment]
    SUPPORTS -.-> |Automation → Courses| AUTO_SUPPORT[Automation Support]
```

## MCP Memory Data Flow

```mermaid
sequenceDiagram
    participant User as Student User
    participant Copilot as GitHub Copilot
    participant MCP as MCP Memory
    participant Files as File System
    participant Portfolio as Portfolio System
    
    User->>Copilot: Request academic task
    Copilot->>MCP: Query knowledge graph
    MCP->>Copilot: Return entities & relations
    Copilot->>Files: Read relevant files
    Files->>Copilot: File contents
    Copilot->>Portfolio: Update portfolio items
    Portfolio->>MCP: Store new observations
    MCP->>Copilot: Confirm updates
    Copilot->>User: Provide complete response
    
    Note over MCP: Persistent knowledge across sessions
    Note over Portfolio: Continuous professional development
    Note over Files: AI-optimized structure
```

## Usage Instructions

### Viewing Knowledge Graph

1. Use MCP Memory tools to explore entities and relationships
2. Reference this visualization for understanding connections
3. Cross-reference with actual JSON files for detailed observations

### Maintaining the Graph

1. Regular updates through MCP Memory tools
2. Document new relationships as courses progress
3. Backup memory files regularly using VS Code tasks

### Integration Points

- GitHub Actions workflows reference these relationships
- Portfolio system updates based on course progress
- VS Code tasks utilize entity structure for organization
- Template system aligned with entity types

## Files Integration

- This visualization complements `mcp-memory-usage-instructions.md`
- Used by automation scripts for context-aware processing
- Referenced in course README files for relationship understanding
- Supports independent workspace configurations
