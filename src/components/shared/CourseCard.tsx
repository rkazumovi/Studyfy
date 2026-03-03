import { Link } from "react-router-dom";
import { Clock, Users, Star, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface CourseCardProps {
  id: string;
  title: string;
  subject: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  students: number;
  rating: number;
  image: string;
  price: string;
  enrollmentType?: string;
}

const levelColors: Record<string, string> = {
  Beginner: "bg-studyfy-success/10 text-studyfy-success border-studyfy-success/20",
  Intermediate: "bg-studyfy-warning/10 text-studyfy-warning border-studyfy-warning/20",
  Advanced: "bg-destructive/10 text-destructive border-destructive/20",
};

const CourseCard = ({ id, title, subject, level, duration, students, rating, image, price, enrollmentType }: CourseCardProps) => (
  <Link
    to={`/courses/${id}`}
    className="group block rounded-xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
  >
    <div className="aspect-video bg-muted overflow-hidden relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {enrollmentType === "paid" && (
        <div className="absolute top-2 right-2">
          <Badge className="bg-accent/90 text-accent-foreground text-[10px] gap-1">
            <Crown className="h-3 w-3" /> Premium
          </Badge>
        </div>
      )}
      {enrollmentType === "free" && (
        <div className="absolute top-2 right-2">
          <Badge className="bg-studyfy-success/90 text-accent-foreground text-[10px]">Free</Badge>
        </div>
      )}
      {enrollmentType === "trial" && (
        <div className="absolute top-2 right-2">
          <Badge className="bg-studyfy-warning/90 text-accent-foreground text-[10px]">Trial</Badge>
        </div>
      )}
    </div>
    <div className="p-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium text-accent uppercase tracking-wider">{subject}</span>
        <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${levelColors[level]}`}>
          {level}
        </Badge>
      </div>
      <h3 className="font-display font-semibold text-card-foreground leading-snug group-hover:text-accent transition-colors line-clamp-2">
        {title}
      </h3>
      <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{duration}</span>
        <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{students.toLocaleString()}</span>
        <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-studyfy-warning text-studyfy-warning" />{rating}</span>
      </div>
      <div className="mt-3 pt-3 border-t border-border">
        <span className="font-display font-bold text-foreground">{price}</span>
      </div>
    </div>
  </Link>
);

export default CourseCard;
