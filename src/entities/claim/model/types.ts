

import type { Document } from "entities/document"
import type { Client } from "entities/client/model";
import type { Status } from "entities/status-history/model";

export interface Claim {
    id: number;
    createdDate: string;
    updatedDate: string;
    createdBy: string;
    updatedBy: string;
    assignee?: string;
    status: string;
    statusReason: string;
    pauseTill?: string;
    category: string;
    channel?: string;
    initiatorType?: string;
    isFirstLine?: boolean;
    claimType?: string;
    claimTheme?: string;
    serviceCount?: number;
    priority?: string;
    priorityReason?: string;
    description?: string;
    comment?: string;
    client?: Client;
    documents: Document[];
    statusHistory: Status[]
  }



