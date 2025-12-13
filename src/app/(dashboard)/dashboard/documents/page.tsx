import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  FilePlus,
  FolderOpen,
  Download,
  MoreHorizontal,
} from "lucide-react";

export const metadata = {
  title: "Documents",
  description: "Document management",
};

const documentStats = [
  {
    title: "Total Documents",
    value: "2,345",
    icon: FileText,
  },
  {
    title: "Folders",
    value: "156",
    icon: FolderOpen,
  },
  {
    title: "Downloads",
    value: "12,456",
    icon: Download,
  },
];

const documents = [
  {
    id: 1,
    name: "Project Proposal.pdf",
    type: "PDF",
    size: "2.4 MB",
    modified: "2 hours ago",
    status: "Published",
  },
  {
    id: 2,
    name: "Financial Report Q4.xlsx",
    type: "Excel",
    size: "1.8 MB",
    modified: "5 hours ago",
    status: "Draft",
  },
  {
    id: 3,
    name: "Meeting Notes.docx",
    type: "Word",
    size: "456 KB",
    modified: "1 day ago",
    status: "Published",
  },
  {
    id: 4,
    name: "Product Roadmap.pptx",
    type: "PowerPoint",
    size: "5.2 MB",
    modified: "2 days ago",
    status: "Review",
  },
  {
    id: 5,
    name: "User Research.pdf",
    type: "PDF",
    size: "3.1 MB",
    modified: "3 days ago",
    status: "Published",
  },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Published":
      return "default";
    case "Draft":
      return "secondary";
    case "Review":
      return "outline";
    default:
      return "secondary";
  }
};

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Documents</h1>
          <p className="text-muted-foreground">
            Manage and organize your documents.
          </p>
        </div>
        <Button>
          <FilePlus className="mr-2 h-4 w-4" />
          Upload Document
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {documentStats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Documents Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Documents</CardTitle>
          <CardDescription>
            Your recently modified documents.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-muted rounded-lg">
                    <FileText className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {doc.type} • {doc.size} • Modified {doc.modified}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={getStatusVariant(doc.status)}>
                    {doc.status}
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
