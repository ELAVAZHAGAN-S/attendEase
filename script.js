
// Sample data
const facultyData = [
    { id: 'F001', name: 'Dr. Sarah Johnson', department: 'Computer Science', subject: 'Data Structures & Algorithms', email: 'sarah.johnson@edu.com', schedule: '9:00 AM - 5:00 PM', status: 'absent', avatar: 'SJ' },
    { id: 'F002', name: 'Prof. Michael Chen', department: 'Mathematics', subject: 'Advanced Calculus', email: 'michael.chen@edu.com', schedule: '8:00 AM - 4:00 PM', status: 'absent', avatar: 'MC' },
    { id: 'F003', name: 'Dr. Emily Rodriguez', department: 'Physics', subject: 'Quantum Mechanics', email: 'emily.rodriguez@edu.com', schedule: '10:00 AM - 6:00 PM', status: 'absent', avatar: 'ER' },
    { id: 'F004', name: 'Prof. David Wilson', department: 'Chemistry', subject: 'Organic Chemistry', email: 'david.wilson@edu.com', schedule: '9:00 AM - 5:00 PM', status: 'absent', avatar: 'DW' },
    { id: 'F005', name: 'Dr. Lisa Anderson', department: 'Biology', subject: 'Molecular Biology', email: 'lisa.anderson@edu.com', schedule: '8:30 AM - 4:30 PM', status: 'absent', avatar: 'LA' },
    { id: 'F006', name: 'Prof. James Taylor', department: 'English', subject: 'Advanced Literature', email: 'james.taylor@edu.com', schedule: '9:30 AM - 5:30 PM', status: 'absent', avatar: 'JT' }
];

const classData = [
    { id: 'C001', name: 'Class IT-A', grade: 'IT', students: 35, subject: 'Mathematics', teacher: 'Prof. Michael Chen', room: 'Room 101' },
    { id: 'C002', name: 'Class IT-B', grade: 'IT', students: 33, subject: 'Science', teacher: 'Dr. Emily Rodriguez', room: 'Room 102' },
    { id: 'C003', name: 'Class CSE-A', grade: 'CSE', students: 30, subject: 'Physics', teacher: 'Dr. Emily Rodriguez', room: 'Lab 201' },
    { id: 'C004', name: 'Class CSE-B', grade: 'CSE', students: 28, subject: 'Chemistry', teacher: 'Prof. David Wilson', room: 'Lab 202' },
    { id: 'C005', name: 'Class ECE-A', grade: 'IT', students: 25, subject: 'Computer Science', teacher: 'Dr. Sarah Johnson', room: 'Lab 301' },
    { id: 'C006', name: 'Class ECE-B', grade: 'IT', students: 27, subject: 'Advanced Physics', teacher: 'Dr. Emily Rodriguez', room: 'Lab 302' }
];

const studentData = {
    'C001': [
        { rollNo: '10A001', name: 'Aarav Sharma', email: 'aarav.sharma@school.edu', grade: 'IT', subject: 'Mathematics', status: 'absent', avatar: 'AS' },
        { rollNo: '10A002', name: 'Vivaan Patel', email: 'vivaan.patel@school.edu', grade: 'IT', subject: 'Mathematics', status: 'absent', avatar: 'VP' },
        { rollNo: '10A003', name: 'Aditya Kumar', email: 'aditya.kumar@school.edu', grade: 'IT', subject: 'Mathematics', status: 'absent', avatar: 'AK' },
        { rollNo: '10A004', name: 'Vihaan Singh', email: 'vihaan.singh@school.edu', grade: 'IT', subject: 'Mathematics', status: 'absent', avatar: 'VS' },
        { rollNo: '10A005', name: 'Arjun Gupta', email: 'arjun.gupta@school.edu', grade: 'IT', subject: 'Mathematics', status: 'absent', avatar: 'AG' }
    ],
    'C002': [
        { rollNo: '10B001', name: 'Ananya Agarwal', email: 'ananya.agarwal@school.edu', grade: 'IT', subject: 'Science', status: 'absent', avatar: 'AA' },
        { rollNo: '10B002', name: 'Diya Mehta', email: 'diya.mehta@school.edu', grade: 'IT', subject: 'Science', status: 'absent', avatar: 'DM' },
        { rollNo: '10B003', name: 'Isha Verma', email: 'isha.verma@school.edu', grade: 'IT', subject: 'Science', status: 'absent', avatar: 'IV' },
        { rollNo: '10B004', name: 'Kavya Nair', email: 'kavya.nair@school.edu', grade: 'IT', subject: 'Science', status: 'absent', avatar: 'KN' }
    ]
};

const notificationsData = [
    { id: 1, type: 'alert', title: 'Low Attendance Alert', message: 'John Smith has attendance below 75%', time: '2 minutes ago', read: false },
    { id: 2, type: 'report', title: 'Weekly Report Generated', message: 'Faculty attendance report for this week is ready', time: '1 hour ago', read: false },
    { id: 3, type: 'system', title: 'System Update', message: 'Face recognition system updated successfully', time: '3 hours ago', read: true },
    { id: 4, type: 'alert', title: 'Class Attendance Complete', message: 'Class 10-A attendance marking completed', time: '5 hours ago', read: true }
];

let currentAttendanceId = null;
let currentAttendanceType = null;
let liveMonitoringInterval = null;

// Initialize the app
function init() {
    showPage('login');
    startLiveMonitoring();
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update every second
}

function updateDateTime() {
    const now = new Date();
    const timeElement = document.getElementById('current-time');
    const dateElement = document.getElementById('current-date');

    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }

    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

function viewFullSchedule() {
    showNotification('Full schedule view coming soon!', 'info');
}

function showPage(pageId) {
    // Hide all pages
    const pages = ['login-page', 'admin-register', 'dashboard', 'faculty-attendance', 'student-attendance', 'student-list', 'analytics', 'live-monitoring', 'notifications'];
    pages.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.style.display = 'none';
    });

    // Show/hide navigation
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');

    if (pageId !== 'login' && pageId !== 'admin-register') {
        sidebar.style.display = 'block';
        mainContent.style.display = 'block';

        // Update active nav item
        updateActiveNavItem(pageId);

        // Update active sidebar item
        updateActiveSidebarItem(pageId);
    } else {
        sidebar.style.display = 'none';
        mainContent.style.display = 'none';
    }

    // Show requested page
    const targetPage = document.getElementById(pageId === 'login' ? 'login-page' : pageId);
    if (targetPage) {
        targetPage.style.display = 'block';
    }

    // Load page-specific data
    if (pageId === 'faculty-attendance') {
        loadFacultyList();
        updateFacultyStats();
    } else if (pageId === 'student-attendance') {
        loadClassList();
    } else if (pageId === 'analytics') {
        loadAnalytics();
    } else if (pageId === 'notifications') {
        loadNotifications();
    }
}

function updateActiveNavItem(pageId) {
    document.querySelectorAll('.apple-nav-item').forEach(item => {
        item.classList.remove('active');
    });

    const activeItem = document.querySelector(`.apple-nav-item[onclick="showPage('${pageId}')"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

function updateActiveSidebarItem(pageId) {
    document.querySelectorAll('.apple-sidebar-item').forEach(item => {
        item.classList.remove('active');
    });

    const activeItem = document.querySelector(`.apple-sidebar-item[onclick="showPage('${pageId}')"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

function login(event) {
    event.preventDefault();
    const button = event.target.querySelector('button[type="submit"]');
    const loginText = button.querySelector('.login-text');
    const loginSpinner = button.querySelector('.login-spinner');

    loginText.style.display = 'none';
    loginSpinner.style.display = 'flex';
    button.disabled = true;

    // Simulate authentication process
    setTimeout(() => {
        showPage('dashboard');
        loginText.style.display = 'block';
        loginSpinner.style.display = 'none';
        button.disabled = false;
        showNotification('Welcome back! Successfully signed in.', 'success');

        // Start welcome animation
        startWelcomeAnimation();
    }, 2000);
}

function socialLogin(provider) {
    showNotification(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login integration coming soon!`, 'info');
}

function togglePassword(button) {
    const input = button.parentElement.querySelector('input');
    const icon = button.querySelector('i');

    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        input.type = 'password';
        icon.className = 'fas fa-eye';
    }
}

function showForgotPassword() {
    showNotification('Password reset link sent to your email!', 'info');
}

function startWelcomeAnimation() {
    // Add welcome animation to dashboard elements
    const elements = document.querySelectorAll('.apple-animate-in');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function adminRegister(event) {
    event.preventDefault();
    const button = event.target.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    button.innerHTML = '<div class="apple-spinner" style="margin-right: 8px;"></div>Creating Account...';
    button.disabled = true;

    setTimeout(() => {
        showNotification('Admin registration successful! Please login with your credentials.', 'success');
        showPage('login');
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
}

function logout() {
    showPage('login');
    showNotification('Successfully signed out. See you soon!', 'info');
}

function loadFacultyList() {
    const tbody = document.getElementById('faculty-list');
    tbody.innerHTML = '';

    facultyData.forEach(faculty => {
        const row = document.createElement('tr');
        row.className = 'apple-slide-in';
        row.innerHTML = `
                    <td>
                        <div style="display: flex; align-items: center;">
                            <div class="apple-avatar" style="margin-right: 16px;">${faculty.avatar}</div>
                            <div>
                                <p class="apple-body" style="font-weight: 600; margin-bottom: 4px;">${faculty.name}</p>
                                <p class="apple-caption" style="color: var(--apple-text-secondary);">${faculty.email}</p>
                            </div>
                        </div>
                    </td>
                    <td class="apple-body">${faculty.department}</td>
                    <td class="apple-body">${faculty.subject}</td>
                    <td class="apple-body">${faculty.schedule}</td>
                    <td style="text-align: center;">
                        <span class="apple-badge ${faculty.status === 'present' ? 'apple-badge-success' : 'apple-badge-danger'}">
                            ${faculty.status === 'present' ? 'Present' : 'Absent'}
                        </span>
                    </td>
                    <td style="text-align: center;">
                        <button onclick="markAttendance('${faculty.id}', 'faculty')" 
                                class="apple-button ${faculty.status === 'present' ? '' : ''}" 
                                style="${faculty.status === 'present' ? 'background: #34c759;' : ''}">
                            <i class="fas fa-camera" style="margin-right: 8px;"></i>
                            ${faculty.status === 'present' ? 'Mark Absent' : 'Mark Present'}
                        </button>
                    </td>
                `;
        tbody.appendChild(row);
    });
}

function updateFacultyStats() {
    const presentCount = facultyData.filter(f => f.status === 'present').length;
    const absentCount = facultyData.filter(f => f.status === 'absent').length;
    const attendanceRate = Math.round((presentCount / facultyData.length) * 100);

    document.getElementById('present-count').textContent = presentCount;
    document.getElementById('absent-count').textContent = absentCount;
    document.getElementById('attendance-rate').textContent = attendanceRate + '%';
}

function loadClassList() {
    const container = document.getElementById('class-list');
    container.innerHTML = '';

    classData.forEach((classItem, index) => {
        const card = document.createElement('div');
        card.className = 'apple-card apple-card-interactive apple-slide-in';
        card.onclick = () => showStudentList(classItem.id, classItem.name);
        card.style.padding = '32px';
        card.style.textAlign = 'center';
        card.style.animationDelay = `${index * 0.1}s`;

        const subjectColors = {
            'Mathematics': 'linear-gradient(135deg, var(--apple-blue), #5856d6)',
            'Science': 'linear-gradient(135deg, #34c759, #30d158)',
            'Physics': 'linear-gradient(135deg, #5856d6, #af52de)',
            'Chemistry': 'linear-gradient(135deg, #007aff, #5ac8fa)',
            'Computer Science': 'linear-gradient(135deg, var(--apple-blue), #5856d6)',
            'Advanced Physics': 'linear-gradient(135deg, #5856d6, #af52de)'
        };

        const gradient = subjectColors[classItem.subject] || 'linear-gradient(135deg, var(--apple-blue), #5856d6)';

        card.innerHTML = `
                    <div style="width: 60px; height: 60px; background: ${gradient}; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
                        <i class="fas fa-book-open" style="color: white; font-size: 24px;"></i>
                    </div>
                    <h3 class="apple-title-3" style="margin-bottom: 8px;">${classItem.name}</h3>
                    <div style="margin-bottom: 16px;">
                        <span class="apple-badge apple-badge-info">${classItem.subject}</span>
                    </div>
                    <p class="apple-body" style="color: var(--apple-text-secondary); margin-bottom: 4px;">${classItem.students} Students</p>
                    <p class="apple-body" style="font-weight: 500; margin-bottom: 4px;">${classItem.teacher}</p>
                    <p class="apple-caption" style="color: var(--apple-text-secondary);">${classItem.room}</p>
                `;
        container.appendChild(card);
    });
}

function showStudentList(classId, className) {
    document.getElementById('class-title').textContent = `${className} - Students`;

    const tbody = document.getElementById('student-attendance-list');
    tbody.innerHTML = '';

    const students = studentData[classId] || [];
    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.className = 'apple-slide-in';
        row.style.animationDelay = `${index * 0.05}s`;
        row.innerHTML = `
                    <td>
                        <div style="display: flex; align-items: center;">
                            <div class="apple-avatar" style="background: linear-gradient(135deg, #34c759, #30d158); margin-right: 16px;">${student.avatar}</div>
                            <div>
                                <p class="apple-body" style="font-weight: 600; margin-bottom: 4px;">${student.name}</p>
                                <p class="apple-caption" style="color: var(--apple-text-secondary);">${student.email}</p>
                            </div>
                        </div>
                    </td>
                    <td class="apple-body" style="font-weight: 500;">${student.rollNo}</td>
                    <td class="apple-body">${student.email}</td>
                    <td style="text-align: center;">
                        <span class="apple-badge ${student.status === 'present' ? 'apple-badge-success' : 'apple-badge-danger'}">
                            ${student.status === 'present' ? 'Present' : 'Absent'}
                        </span>
                    </td>
                    <td style="text-align: center;">
                        <button onclick="markAttendance('${student.rollNo}', 'student')" 
                                class="apple-button ${student.status === 'present' ? '' : ''}"
                                style="${student.status === 'present' ? 'background: #34c759;' : ''}">
                            <i class="fas fa-camera" style="margin-right: 8px;"></i>
                            ${student.status === 'present' ? 'Mark Absent' : 'Mark Present'}
                        </button>
                    </td>
                `;
        tbody.appendChild(row);
    });

    updateStudentStats(students);
    showPage('student-list');
}

function updateStudentStats(students) {
    const totalStudents = students.length;
    const presentCount = students.filter(s => s.status === 'present').length;
    const absentCount = students.filter(s => s.status === 'absent').length;
    const attendanceRate = totalStudents > 0 ? Math.round((presentCount / totalStudents) * 100) : 0;

    document.getElementById('total-students').textContent = totalStudents;
    document.getElementById('students-present').textContent = presentCount;
    document.getElementById('students-absent').textContent = absentCount;
    document.getElementById('student-attendance-rate').textContent = attendanceRate + '%';
}

function markAttendance(id, type) {
    currentAttendanceId = id;
    currentAttendanceType = type;
    document.getElementById('camera-modal').classList.add('active');
}

function closeCameraModal() {
    document.getElementById('camera-modal').classList.remove('active');
    currentAttendanceId = null;
    currentAttendanceType = null;
}

function captureImage() {
    if (currentAttendanceType === 'faculty') {
        const faculty = facultyData.find(f => f.id === currentAttendanceId);
        if (faculty) {
            faculty.status = faculty.status === 'present' ? 'absent' : 'present';
            loadFacultyList();
            updateFacultyStats();
            showNotification(`${faculty.name} marked as ${faculty.status}`, 'success');
            addLiveActivity(`${faculty.name} marked ${faculty.status}`, 'faculty');
        }
    } else if (currentAttendanceType === 'student') {
        // Find student in all classes
        for (const classId in studentData) {
            const student = studentData[classId].find(s => s.rollNo === currentAttendanceId);
            if (student) {
                student.status = student.status === 'present' ? 'absent' : 'present';
                showStudentList(classId, 'Current Class');
                showNotification(`${student.name} marked as ${student.status}`, 'success');
                addLiveActivity(`${student.name} marked ${student.status}`, 'student');
                break;
            }
        }
    }

    closeCameraModal();
}

function filterFaculty(searchTerm) {
    const rows = document.querySelectorAll('#faculty-list tr');
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm.toLowerCase()) ? '' : 'none';
    });
}

function filterByDepartment(department) {
    // Update active tab
    document.querySelectorAll('.apple-filter-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    const rows = document.querySelectorAll('#faculty-list tr');
    rows.forEach(row => {
        if (department === 'all') {
            row.style.display = '';
        } else {
            const departmentCell = row.cells[1];
            row.style.display = departmentCell && departmentCell.textContent === department ? '' : 'none';
        }
    });
}

function startLiveMonitoring() {
    if (liveMonitoringInterval) clearInterval(liveMonitoringInterval);

    liveMonitoringInterval = setInterval(() => {
        updateLiveStats();
        updateLiveFeed();
    }, 5000);
}

function updateLiveStats() {
    const presentCount = facultyData.filter(f => f.status === 'present').length;
    const livePresent = document.getElementById('live-present');
    const liveScanning = document.getElementById('live-scanning');
    const liveClasses = document.getElementById('live-classes');
    const liveAlerts = document.getElementById('live-alerts');

    if (livePresent) livePresent.textContent = presentCount;
    if (liveScanning) liveScanning.textContent = Math.floor(Math.random() * 5) + 1;
    if (liveClasses) liveClasses.textContent = Math.floor(Math.random() * 15) + 8;
    if (liveAlerts) liveAlerts.textContent = Math.floor(Math.random() * 5);
}

function updateLiveFeed() {
    const liveFeed = document.getElementById('live-feed');
    if (!liveFeed) return;

    // Simulate live activity
    const activities = [
        'Dr. Sarah Johnson marked present',
        'Class 10-A attendance started',
        'Prof. Michael Chen entered classroom',
        'Student attendance completed for Class 11-B',
        'Low attendance alert for John Smith'
    ];

    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    const time = new Date().toLocaleTimeString();

    const activityItem = document.createElement('div');
    activityItem.className = 'apple-slide-in';
    activityItem.style.padding = '16px';
    activityItem.style.borderBottom = '1px solid var(--apple-border)';
    activityItem.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center;">
                        <div class="apple-status-online" style="margin-right: 12px;"></div>
                        <div>
                            <p class="apple-body" style="font-weight: 500; margin-bottom: 4px;">${randomActivity}</p>
                            <p class="apple-caption" style="color: var(--apple-text-secondary);">${time}</p>
                        </div>
                    </div>
                    <span class="apple-badge apple-badge-info">Live</span>
                </div>
            `;

    liveFeed.insertBefore(activityItem, liveFeed.firstChild);

    // Keep only last 10 items
    while (liveFeed.children.length > 10) {
        liveFeed.removeChild(liveFeed.lastChild);
    }
}

function addLiveActivity(activity, type) {
    const liveFeed = document.getElementById('live-feed');
    if (!liveFeed) return;

    const time = new Date().toLocaleTimeString();
    const activityItem = document.createElement('div');
    activityItem.className = 'apple-slide-in';
    activityItem.style.padding = '16px';
    activityItem.style.borderBottom = '1px solid var(--apple-border)';

    const badgeClass = type === 'faculty' ? 'apple-badge-info' : 'apple-badge-success';

    activityItem.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center;">
                        <div class="apple-status-online" style="margin-right: 12px;"></div>
                        <div>
                            <p class="apple-body" style="font-weight: 500; margin-bottom: 4px;">${activity}</p>
                            <p class="apple-caption" style="color: var(--apple-text-secondary);">${time}</p>
                        </div>
                    </div>
                    <span class="apple-badge ${badgeClass}">Live</span>
                </div>
            `;

    liveFeed.insertBefore(activityItem, liveFeed.firstChild);

    // Keep only last 10 items
    while (liveFeed.children.length > 10) {
        liveFeed.removeChild(liveFeed.lastChild);
    }
}

function loadNotifications() {
    const notificationsList = document.getElementById('notifications-list');
    if (!notificationsList) return;

    notificationsList.innerHTML = '';

    notificationsData.forEach((notification, index) => {
        const notificationItem = document.createElement('div');
        notificationItem.className = 'apple-slide-in';
        notificationItem.style.animationDelay = `${index * 0.1}s`;
        notificationItem.style.padding = '24px';
        notificationItem.style.borderBottom = '1px solid var(--apple-border)';
        notificationItem.style.cursor = 'pointer';
        notificationItem.style.transition = 'background 0.3s ease';

        if (!notification.read) {
            notificationItem.style.background = 'rgba(0, 122, 255, 0.02)';
        }

        notificationItem.onmouseover = () => {
            notificationItem.style.background = 'rgba(0, 122, 255, 0.05)';
        };

        notificationItem.onmouseout = () => {
            notificationItem.style.background = notification.read ? 'transparent' : 'rgba(0, 122, 255, 0.02)';
        };

        const typeIcons = {
            'alert': 'fas fa-exclamation-triangle',
            'report': 'fas fa-chart-bar',
            'system': 'fas fa-cog'
        };

        const typeColors = {
            'alert': '#ff9500',
            'report': '#34c759',
            'system': 'var(--apple-blue)'
        };

        notificationItem.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <div style="display: flex; align-items: center;">
                            <div style="width: 40px; height: 40px; background: ${typeColors[notification.type]}; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
                                <i class="${typeIcons[notification.type]}" style="color: white; font-size: 16px;"></i>
                            </div>
                            <div>
                                <p class="apple-body" style="font-weight: 600; margin-bottom: 4px;">${notification.title}</p>
                                <p class="apple-body" style="color: var(--apple-text-secondary); margin-bottom: 4px;">${notification.message}</p>
                                <p class="apple-caption" style="color: var(--apple-text-secondary);">${notification.time}</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            ${!notification.read ? '<div style="width: 8px; height: 8px; background: var(--apple-blue); border-radius: 50%; margin-right: 16px;"></div>' : ''}
                            <i class="fas fa-chevron-right" style="color: var(--apple-text-secondary); font-size: 12px;"></i>
                        </div>
                    </div>
                `;

        notificationItem.onclick = () => {
            notification.read = true;
            loadNotifications();
            showNotification('Notification marked as read', 'info');
        };

        notificationsList.appendChild(notificationItem);
    });
}

function filterNotifications(type) {
    // Update active tab
    document.querySelectorAll('.apple-filter-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    // Filter logic would go here
    loadNotifications();
}

function quickScan() {
    showNotification('Quick scan initiated! Position yourself in front of the camera.', 'info');
    setTimeout(() => {
        document.getElementById('camera-modal').classList.add('active');
    }, 1000);
}

function generateReport() {
    showNotification('Generating comprehensive attendance report...', 'info');
    setTimeout(() => {
        showNotification('Report generated successfully! Check your downloads.', 'success');
    }, 2000);
}

function exportFacultyData() {
    showNotification('Exporting faculty attendance data...', 'info');
    setTimeout(() => {
        showNotification('Faculty data exported successfully!', 'success');
    }, 1500);
}

function bulkMarkAttendance() {
    showNotification('Bulk attendance marking feature coming soon!', 'info');
}

function showNotifications() {
    showPage('notifications');
}

function loadAnalytics() {
    // Load top performing classes
    loadTopClasses();
    // Load attention required classes
    loadAttentionRequired();
    // Load class-wise analytics
    loadClassAnalytics();
    // Load subject performance
    loadSubjectPerformance();
    // Load monthly trends
    loadMonthlyTrends();
    // Load improvement areas
    loadImprovementAreas();
}

function filterAnalytics(type) {
    // Update active tab
    document.querySelectorAll('.apple-filter-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    // Hide all analytics sections
    document.getElementById('analytics-overview').style.display = 'none';
    document.getElementById('analytics-class-wise').style.display = 'none';
    document.getElementById('analytics-faculty-performance').style.display = 'none';
    document.getElementById('analytics-student-performance').style.display = 'none';
    document.getElementById('analytics-trends').style.display = 'none';

    // Show selected section
    document.getElementById(`analytics-${type}`).style.display = 'block';

    // Load specific data if needed
    if (type === 'class-wise') {
        loadClassAnalytics();
    } else if (type === 'faculty-performance') {
        loadFacultyPerformance();
    } else if (type === 'student-performance') {
        loadStudentPerformance();
    }
}

function loadTopClasses() {
    const topClasses = document.getElementById('top-classes');
    if (!topClasses) return;

    const topClassesData = [
        { name: 'Class 12-A', attendance: '98.5%', improvement: '+2.3%' },
        { name: 'Class 11-B', attendance: '96.8%', improvement: '+1.8%' },
        { name: 'Class 10-A', attendance: '95.2%', improvement: '+0.9%' }
    ];

    topClasses.innerHTML = '';
    topClassesData.forEach((classItem, index) => {
        const item = document.createElement('div');
        item.className = 'apple-slide-in';
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.justifyContent = 'space-between';
        item.style.padding = '16px 0';
        item.style.borderBottom = '1px solid var(--apple-border)';

        item.innerHTML = `
                    <div style="display: flex; align-items: center;">
                        <div style="width: 32px; height: 32px; background: #34c759; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
                            <span style="color: white; font-weight: 600; font-size: 14px;">${index + 1}</span>
                        </div>
                        <div>
                            <p class="apple-body" style="font-weight: 600; margin-bottom: 4px;">${classItem.name}</p>
                            <p class="apple-caption" style="color: var(--apple-text-secondary);">${classItem.attendance} attendance</p>
                        </div>
                    </div>
                    <span class="apple-badge apple-badge-success">${classItem.improvement}</span>
                `;

        topClasses.appendChild(item);
    });
}

function loadAttentionRequired() {
    const attentionRequired = document.getElementById('attention-required');
    if (!attentionRequired) return;

    const attentionData = [
        { name: 'Class 10-C', attendance: '72.3%', issue: 'Below threshold' },
        { name: 'Class 11-C', attendance: '74.8%', issue: 'Declining trend' },
        { name: 'Class 12-C', attendance: '76.1%', issue: 'Irregular pattern' }
    ];

    attentionRequired.innerHTML = '';
    attentionData.forEach((classItem, index) => {
        const item = document.createElement('div');
        item.className = 'apple-slide-in';
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.justifyContent = 'space-between';
        item.style.padding = '16px 0';
        item.style.borderBottom = '1px solid var(--apple-border)';

        item.innerHTML = `
                    <div style="display: flex; align-items: center;">
                        <div style="width: 32px; height: 32px; background: #ff9500; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
                            <i class="fas fa-exclamation" style="color: white; font-size: 14px;"></i>
                        </div>
                        <div>
                            <p class="apple-body" style="font-weight: 600; margin-bottom: 4px;">${classItem.name}</p>
                            <p class="apple-caption" style="color: var(--apple-text-secondary);">${classItem.attendance} - ${classItem.issue}</p>
                        </div>
                    </div>
                    <span class="apple-badge apple-badge-warning">Action Needed</span>
                `;

        attentionRequired.appendChild(item);
    });
}

function loadClassAnalytics() {
    const classAnalyticsGrid = document.getElementById('class-analytics-grid');
    if (!classAnalyticsGrid) return;

    classAnalyticsGrid.innerHTML = '';

    classData.forEach((classItem, index) => {
        const attendanceRate = Math.floor(Math.random() * 20) + 80; // Random between 80-100
        const students = studentData[classItem.id] || [];
        const presentCount = Math.floor(students.length * (attendanceRate / 100));

        const card = document.createElement('div');
        card.className = 'apple-card apple-slide-in';
        card.style.padding = '32px';
        card.style.animationDelay = `${index * 0.1}s`;

        const statusColor = attendanceRate >= 90 ? '#34c759' : attendanceRate >= 75 ? '#ff9500' : '#ff3b30';

        card.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
                        <h3 class="apple-title-3">${classItem.name}</h3>
                        <span class="apple-badge" style="background: rgba(${attendanceRate >= 90 ? '52, 199, 89' : attendanceRate >= 75 ? '255, 149, 0' : '255, 59, 48'}, 0.1); color: ${statusColor};">
                            ${attendanceRate}%
                        </span>
                    </div>
                    
                    <div style="margin-bottom: 20px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="font-size: 14px; color: var(--apple-text-secondary);">Present Today</span>
                            <span style="font-size: 14px; font-weight: 600;">${presentCount}/${students.length}</span>
                        </div>
                        <div style="width: 100%; height: 6px; background: var(--apple-gray-light); border-radius: 3px;">
                            <div style="width: ${attendanceRate}%; height: 100%; background: ${statusColor}; border-radius: 3px;"></div>
                        </div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 14px;">
                        <div>
                            <p style="color: var(--apple-text-secondary); margin-bottom: 4px;">Subject</p>
                            <p style="font-weight: 600;">${classItem.subject}</p>
                        </div>
                        <div>
                            <p style="color: var(--apple-text-secondary); margin-bottom: 4px;">Teacher</p>
                            <p style="font-weight: 600;">${classItem.teacher.split(' ')[1]}</p>
                        </div>
                    </div>
                `;

        classAnalyticsGrid.appendChild(card);
    });
}

function loadFacultyPerformance() {
    const topFacultyPerformance = document.getElementById('top-faculty-performance');
    if (!topFacultyPerformance) return;

    const facultyPerformanceData = [
        { name: 'Dr. Sarah Johnson', department: 'Computer Science', attendance: '98.5%', trend: 'up' },
        { name: 'Prof. Michael Chen', department: 'Mathematics', attendance: '96.8%', trend: 'up' },
        { name: 'Dr. Emily Rodriguez', department: 'Physics', attendance: '95.2%', trend: 'stable' },
        { name: 'Prof. David Wilson', department: 'Chemistry', attendance: '94.1%', trend: 'up' },
        { name: 'Dr. Lisa Anderson', department: 'Biology', attendance: '93.7%', trend: 'down' }
    ];

    topFacultyPerformance.innerHTML = '';
    facultyPerformanceData.forEach((faculty, index) => {
        const item = document.createElement('div');
        item.className = 'apple-slide-in';
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.justifyContent = 'space-between';
        item.style.padding = '16px 0';
        item.style.borderBottom = '1px solid var(--apple-border)';

        const trendIcon = faculty.trend === 'up' ? 'fa-arrow-up' : faculty.trend === 'down' ? 'fa-arrow-down' : 'fa-minus';
        const trendColor = faculty.trend === 'up' ? '#34c759' : faculty.trend === 'down' ? '#ff3b30' : '#ff9500';

        item.innerHTML = `
                    <div style="display: flex; align-items: center;">
                        <div style="width: 32px; height: 32px; background: linear-gradient(135deg, var(--apple-blue), #5856d6); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
                            <span style="color: white; font-weight: 600; font-size: 12px;">${index + 1}</span>
                        </div>
                        <div>
                            <p class="apple-body" style="font-weight: 600; margin-bottom: 4px;">${faculty.name}</p>
                            <p class="apple-caption" style="color: var(--apple-text-secondary);">${faculty.department} • ${faculty.attendance}</p>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <i class="fas ${trendIcon}" style="color: ${trendColor}; font-size: 12px; margin-right: 8px;"></i>
                        <span style="font-size: 14px; font-weight: 600; color: ${trendColor};">${faculty.attendance}</span>
                    </div>
                `;

        topFacultyPerformance.appendChild(item);
    });
}

function loadStudentPerformance() {
    const topStudentClasses = document.getElementById('top-student-classes');
    if (!topStudentClasses) return;

    const studentClassData = [
        { name: 'Class 12-A', students: '25/25', attendance: '98.5%', trend: 'up' },
        { name: 'Class 11-B', students: '28/30', attendance: '96.8%', trend: 'up' },
        { name: 'Class 10-A', students: '33/35', attendance: '95.2%', trend: 'stable' },
        { name: 'Class 12-B', students: '24/27', attendance: '94.1%', trend: 'up' },
        { name: 'Class 11-A', students: '27/30', attendance: '93.7%', trend: 'down' }
    ];

    topStudentClasses.innerHTML = '';
    studentClassData.forEach((classItem, index) => {
        const item = document.createElement('div');
        item.className = 'apple-slide-in';
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.justifyContent = 'space-between';
        item.style.padding = '16px 0';
        item.style.borderBottom = '1px solid var(--apple-border)';

        const trendIcon = classItem.trend === 'up' ? 'fa-arrow-up' : classItem.trend === 'down' ? 'fa-arrow-down' : 'fa-minus';
        const trendColor = classItem.trend === 'up' ? '#34c759' : classItem.trend === 'down' ? '#ff3b30' : '#ff9500';

        item.innerHTML = `
                    <div style="display: flex; align-items: center;">
                        <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #34c759, #30d158); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 16px;">
                            <span style="color: white; font-weight: 600; font-size: 12px;">${index + 1}</span>
                        </div>
                        <div>
                            <p class="apple-body" style="font-weight: 600; margin-bottom: 4px;">${classItem.name}</p>
                            <p class="apple-caption" style="color: var(--apple-text-secondary);">${classItem.students} students • ${classItem.attendance}</p>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <i class="fas ${trendIcon}" style="color: ${trendColor}; font-size: 12px; margin-right: 8px;"></i>
                        <span style="font-size: 14px; font-weight: 600; color: ${trendColor};">${classItem.attendance}</span>
                    </div>
                `;

        topStudentClasses.appendChild(item);
    });
}

function loadMonthlyTrends() {
    const monthlyTrends = document.getElementById('monthly-trends');
    if (!monthlyTrends) return;

    const monthsData = [
        { month: 'January', attendance: '92.1%', change: '+1.2%' },
        { month: 'February', attendance: '94.3%', change: '+2.2%' },
        { month: 'March', attendance: '91.8%', change: '-2.5%' },
        { month: 'April', attendance: '95.6%', change: '+3.8%' }
    ];

    monthlyTrends.innerHTML = '';
    monthsData.forEach((month, index) => {
        const item = document.createElement('div');
        item.className = 'apple-slide-in';
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.justifyContent = 'space-between';
        item.style.padding = '12px 0';
        item.style.borderBottom = '1px solid var(--apple-border)';

        const isPositive = month.change.startsWith('+');

        item.innerHTML = `
                    <div>
                        <p class="apple-body" style="font-weight: 600; margin-bottom: 4px;">${month.month}</p>
                        <p class="apple-caption" style="color: var(--apple-text-secondary);">${month.attendance}</p>
                    </div>
                    <span class="apple-badge ${isPositive ? 'apple-badge-success' : 'apple-badge-danger'}">${month.change}</span>
                `;

        monthlyTrends.appendChild(item);
    });
}

function loadImprovementAreas() {
    const improvementAreas = document.getElementById('improvement-areas');
    if (!improvementAreas) return;

    const improvementData = [
        { area: 'Monday Morning Classes', impact: 'High', priority: 'urgent' },
        { area: 'Post-Lunch Sessions', impact: 'Medium', priority: 'medium' },
        { area: 'Friday Afternoon', impact: 'Low', priority: 'low' }
    ];

    improvementAreas.innerHTML = '';
    improvementData.forEach((area, index) => {
        const item = document.createElement('div');
        item.className = 'apple-slide-in';
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.justifyContent = 'space-between';
        item.style.padding = '16px 0';
        item.style.borderBottom = '1px solid var(--apple-border)';

        const priorityColor = area.priority === 'urgent' ? '#ff3b30' : area.priority === 'medium' ? '#ff9500' : '#34c759';

        item.innerHTML = `
                    <div>
                        <p class="apple-body" style="font-weight: 600; margin-bottom: 4px;">${area.area}</p>
                        <p class="apple-caption" style="color: var(--apple-text-secondary);">${area.impact} impact on attendance</p>
                    </div>
                    <span class="apple-badge" style="background: rgba(${area.priority === 'urgent' ? '255, 59, 48' : area.priority === 'medium' ? '255, 149, 0' : '52, 199, 89'}, 0.1); color: ${priorityColor};">
                        ${area.priority.charAt(0).toUpperCase() + area.priority.slice(1)}
                    </span>
                `;

        improvementAreas.appendChild(item);
    });
}

function exportStudentData() {
    showNotification('Exporting student attendance data...', 'info');
    setTimeout(() => {
        showNotification('Student data exported successfully!', 'success');
    }, 1500);
}

function markAllPresent() {
    // Find current class students and mark all present
    const currentClassId = getCurrentClassId();
    if (currentClassId && studentData[currentClassId]) {
        studentData[currentClassId].forEach(student => {
            student.status = 'present';
        });
        showStudentList(currentClassId, 'Current Class');
        showNotification('All students marked as present!', 'success');
    }
}

function getCurrentClassId() {
    // This would normally track the current class being viewed
    // For demo purposes, return the first class
    return Object.keys(studentData)[0];
}

function showSmartReports() {
    showNotification('🧠 AI-powered smart reports are being generated with predictive insights!', 'info');
    setTimeout(() => {
        showNotification('📊 Smart report ready! Includes behavior patterns and attendance predictions.', 'success');
    }, 3000);
}

function showPredictiveAnalytics() {
    showNotification('🔮 Analyzing historical data to predict future attendance trends...', 'info');
    setTimeout(() => {
        showNotification('📈 Prediction complete! 94.2% accuracy for next month\'s attendance forecast.', 'success');
    }, 2500);
}

function showBehaviorAnalytics() {
    showNotification('🤖 AI behavior analytics activated! Analyzing student attendance patterns...', 'info');
    setTimeout(() => {
        showNotification('✨ Pattern analysis complete! Identified 12 key behavioral insights.', 'success');
    }, 3500);
}

function showGeofencing() {
    showNotification('📍 Smart geofencing system activated! Tracking campus entry/exit points...', 'info');
    setTimeout(() => {
        showNotification('🗺️ Geofencing active! 2,847 students tracked across 15 campus zones.', 'success');
    }, 2000);
}

function showParentPortal() {
    showNotification('👨‍👩‍👧‍👦 Parent portal integration starting... Sending real-time notifications...', 'info');
    setTimeout(() => {
        showNotification('📱 Parent notifications sent! 15,234 parents updated with today\'s attendance.', 'success');
    }, 2800);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `apple-notification apple-notification-${type}`;
    notification.innerHTML = `
                <div style="display: flex; align-items: center;">
                    <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}" 
                       style="margin-right: 12px; color: ${type === 'success' ? '#34c759' : type === 'error' ? '#ff3b30' : 'var(--apple-blue)'};"></i>
                    <span class="apple-body">${message}</span>
                </div>
            `;

    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 400);
    }, 4000);
}

// Initialize app when page loads
document.addEventListener('DOMContentLoaded', init);