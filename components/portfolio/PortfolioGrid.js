import ProjectCard from "./ProjectCard";
import projects from "@/data/projects";

export default function PortfolioGrid({ searchQuery, activeTab }) {
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === "projects") return matchesSearch;
    if (activeTab === "saved") return false; // Implement saved logic
    if (activeTab === "shared") return false; // Implement shared logic
    if (activeTab === "achievements") return false; // Implement achievements logic

    return matchesSearch;
  });

  return (
    <div className="flex flex-col gap-6">
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 text-gray-500">No projects found</div>
      ) : (
        filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      )}
    </div>
  );
}
